import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'store';
import { register } from 'service/profile';
import { UserData } from './types';
import { emailPattern, passwordPattern } from 'utils/regex';
import { MAX_FIRST_NAME_LENGTH, MAX_LAST_NAME_LENGTH } from './helpers';
import { SIGN_UP_TAB } from 'layout/AuthLayout/helpers';
import { AuthLayout } from 'layout/AuthLayout';
import { TextInputField } from 'common/components/TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

export const SignUpPage = () => {
	const [showErrors, setShowErrors] = useState(false);
	const [serverError, setServerError] = useState('');

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
	const dispatch = useAppDispatch();

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
		// hide errors when user changed some input field
		const subscription = watch(() => {
			if (!showErrors) return;
			setShowErrors(false);
			setServerError('');
		});

		return () => subscription.unsubscribe();
	}, [showErrors, watch]);

	useEffect(() => {
		// set server error
		if (!serverError) return;
		setError('email', { message: '' });
	}, [serverError, setError]);

	useEffect(() => {
		// show errors after submitting form
		if (hasErrors) setShowErrors(true);
	}, [hasErrors, isSubmitting]);

	const onSubmit: SubmitHandler<UserData> = useCallback((data) => {}, []);

	return (
		<AuthLayout activeTab={SIGN_UP_TAB}>
			<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
				{inputs.map((input) => {
					return <TextInputField key={input.placeholder} {...input} />;
				})}
				<div className={styles.checkboxContainer}>
					<input type='checkbox' {...register('isCreator')} className={styles.checkbox} />
					<p className={styles.placeholder}>
						{t('sign_up_page_is_creator_field_placeholder')}
					</p>
				</div>
				<div className={styles.errorContainer}>
					{serverError && <p className={styles.error}>{serverError}</p>}
				</div>
				<PrimaryButton
					title={t('sign_up_page_sign_up_button')}
					loading={false}
					disabled={disabled}
					className={styles.signUpButton}
				/>
			</form>
		</AuthLayout>
	);
};
