import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store';
import { selectProfileRegistered, setProfileRegistered } from 'service/profile';
import { useAuth } from 'hooks';
import { UserData } from './types';
import { LOGIN_TAB } from 'layout/AuthLayout/helpers';
import { NavigationLayout } from 'layout/NavigationLayout';
import { AuthLayout } from 'layout/AuthLayout';
import { TextInputField } from 'common/components/TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import { RegisteredProfilePopup } from './RegisteredProfilePopup';
import styles from './styles.module.scss';

export const LoginPage = () => {
	const [showErrors, setShowErrors] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<UserData>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { t } = useTranslation();
	const { login, clearServerError, loading, serverError } = useAuth(t);
	const dispatch = useAppDispatch();
	const profileRegistered = useAppSelector(selectProfileRegistered);

	const hasErrors = Object.values(errors).length > 0;
	const disabled = hasErrors && showErrors;

	const inputs = useMemo(() => {
		return [
			{
				placeholder: t('login_page_email_field_placeholder'),
				error: showErrors ? errors.email?.message : '',
				register: register('email', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
				}),
			},
			{
				placeholder: t('login_page_password_field_placeholder'),
				type: 'password',
				error: showErrors ? errors.password?.message : '',
				register: register('password', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
				}),
			},
		];
	}, [errors.email?.message, errors.password?.message, register, showErrors, t]);

	useEffect(() => {
		const subscription = watch(() => {
			if (!showErrors) return;
			setShowErrors(false); // hide errors when user changed some input field
			clearServerError();
		});

		return () => subscription.unsubscribe();
	}, [clearServerError, showErrors, watch]);

	useEffect(() => {
		if (!serverError) return;
		setError('email', { message: '' }); // set server error
	}, [serverError, setError]);

	useEffect(() => {
		if (hasErrors) setShowErrors(true); // show errors after submitting form
	}, [hasErrors, isSubmitting]);

	useEffect(() => {
		if (profileRegistered) {
			setTimeout(() => {
				dispatch(setProfileRegistered(false)); // set profile as unregistered after redirecting from sign up page
			}, 3000);
		}
	}, [dispatch, profileRegistered]);

	const onSubmit: SubmitHandler<UserData> = useCallback(
		async (data) => {
			const { email, password } = data;
			await login(email, password);
		},
		[login]
	);

	return (
		<NavigationLayout>
			<AuthLayout activeTab={LOGIN_TAB}>
				<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
					{inputs.map((input) => {
						return <TextInputField key={input.placeholder} {...input} />;
					})}
					<p className={styles.forgotPasswordTitle}>
						{t('login_page_forgot_password_title')}
					</p>
					<div className={styles.errorContainer}>
						{serverError && <p className={styles.error}>{serverError}</p>}
					</div>
					<PrimaryButton
						title={t('login_page_login_button')}
						loading={loading}
						disabled={disabled}
						className={styles.loginButton}
					/>
					<RegisteredProfilePopup show={profileRegistered} />
				</form>
			</AuthLayout>
		</NavigationLayout>
	);
};
