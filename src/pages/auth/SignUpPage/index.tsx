import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectProfileError, selectProfileRegistered } from 'service/profile';
import { RegisterDto } from 'service/profile/dtos';
import { useAuth } from 'hooks';
import { loginRoute } from 'routes/routes';
import { UserData } from './types';
import { emailPattern, passwordPattern } from 'utils/regex';
import { MAX_FIRST_NAME_LENGTH, MAX_LAST_NAME_LENGTH } from './helpers';
import { SIGN_UP_TAB } from 'layout/AuthLayout/helpers';
import { NavigationLayout } from 'layout/NavigationLayout';
import { AuthLayout } from 'layout/AuthLayout';
import { TextInputField } from 'common/components/TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

export const SignUpPage = () => {
	const [showErrors, setShowErrors] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<UserData>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmedPassword: '',
			isCreator: false,
		},
	});

	const { t } = useTranslation();
	const navigate = useNavigate();
	const { register: registerProfile, loading } = useAuth(t);
	const profileError = useAppSelector(selectProfileError);
	const profileRegistered = useAppSelector(selectProfileRegistered);

	const newPasswordInput = (useRef({}).current = watch('password', ''));
	const repeatedPasswordInput = (useRef({}).current = watch('confirmedPassword', ''));

	const hasErrors = Object.values(errors).length > 0;
	const disabled = hasErrors && showErrors;

	const inputs = useMemo(() => {
		return [
			{
				placeholder: t('sign_up_page_first_name_field_placeholder'),
				error: showErrors ? errors.firstName?.message : '',
				register: register('firstName', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
					maxLength: {
						value: MAX_FIRST_NAME_LENGTH,
						message: t('sign_up_page_first_name_error'),
					},
				}),
			},
			{
				placeholder: t('sign_up_page_last_name_field_placeholder'),
				error: showErrors ? errors.lastName?.message : '',
				register: register('lastName', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
					maxLength: {
						value: MAX_LAST_NAME_LENGTH,
						message: t('sign_up_page_last_name_error'),
					},
				}),
			},
			{
				placeholder: t('sign_up_page_email_field_placeholder'),
				error: showErrors ? errors.email?.message : '',
				register: register('email', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
					pattern: {
						value: emailPattern,
						message: t('sign_up_page_email_pattern_error'),
					},
				}),
			},
			{
				placeholder: t('sign_up_page_password_field_placeholder'),
				type: 'password',
				error: showErrors ? errors.password?.message : '',
				register: register('password', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
					pattern: {
						value: passwordPattern,
						message: t('sign_up_page_password_pattern_error'),
					},
					validate: (value) =>
						value === repeatedPasswordInput || t('sign_up_page_password_match_error'),
				}),
			},
			{
				placeholder: t('sign_up_page_confirm_password_field_placeholder'),
				type: 'password',
				error: showErrors ? errors.confirmedPassword?.message : '',
				register: register('confirmedPassword', {
					shouldUnregister: true,
					required: t('auth_page_input_required_error'),
					validate: (value) =>
						value === newPasswordInput || t('sign_up_page_password_match_error'),
				}),
			},
		];
	}, [
		errors.confirmedPassword?.message,
		errors.email?.message,
		errors.firstName?.message,
		errors.lastName?.message,
		errors.password?.message,
		newPasswordInput,
		register,
		repeatedPasswordInput,
		showErrors,
		t,
	]);

	useEffect(() => {
		const subscription = watch(() => {
			if (!showErrors) return;
			setShowErrors(false); // hide errors when user changed some input field
		});

		return () => subscription.unsubscribe();
	}, [showErrors, watch]);

	useEffect(() => {
		if (!profileError) return;
		setError('email', { message: t('sign_up_page_email_error') }); // set server error
	}, [profileError, setError, t]);

	useEffect(() => {
		if (hasErrors) setShowErrors(true); // show errors after submitting form
	}, [hasErrors, isSubmitting]);

	useEffect(() => {
		if (profileRegistered) navigate(loginRoute); // navigate to login after successful registration
	}, [navigate, profileRegistered]);

	const onSubmit: SubmitHandler<UserData> = useCallback(
		(data) => {
			const registerDto: RegisterDto = {
				email: data.email,
				first_name: data.firstName,
				last_name: data.lastName,
				password: data.password,
				repeat_password: data.confirmedPassword,
				is_author: data.isCreator,
			};
			registerProfile(registerDto);
		},
		[registerProfile]
	);

	return (
		<NavigationLayout>
			<AuthLayout activeTab={SIGN_UP_TAB}>
				<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
					{inputs.map((input) => {
						return <TextInputField key={input.placeholder} {...input} />;
					})}
					<div className={styles.checkboxContainer}>
						<input
							type='checkbox'
							{...register('isCreator')}
							className={styles.checkbox}
						/>
						<p className={styles.placeholder}>
							{t('sign_up_page_is_creator_field_placeholder')}
						</p>
					</div>
					<PrimaryButton
						title={t('sign_up_page_sign_up_button')}
						loading={loading}
						disabled={disabled}
						className={styles.signUpButton}
					/>
				</form>
			</AuthLayout>
		</NavigationLayout>
	);
};
