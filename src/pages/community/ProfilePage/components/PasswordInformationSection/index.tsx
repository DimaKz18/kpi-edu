import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PasswordInformationData } from './types';
import { passwordPattern } from 'utils/regex';
import { TextInputField } from '../PersonalInformationSection/TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

type Props = {
	loadingUpdatedPassword: boolean;
	onUpdatePasswordInformation: (newPassword: string) => void;
};

export const PasswordInformationSection = memo(
	({ loadingUpdatedPassword, onUpdatePasswordInformation }: Props) => {
		const [showErrors, setShowErrors] = useState(false);

		const {
			register,
			handleSubmit,
			watch,
			formState: { errors, isSubmitting },
		} = useForm<PasswordInformationData>({
			defaultValues: {
				password: '',
				confirmedPassword: '',
			},
		});

		const { t } = useTranslation();

		const newPasswordInput = (useRef({}).current = watch('password', ''));
		const repeatedPasswordInput = (useRef({}).current = watch('confirmedPassword', ''));

		const hasErrors = Object.values(errors).length > 0;
		const disabled = hasErrors && showErrors;

		const inputs = useMemo(() => {
			return [
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
			if (hasErrors) setShowErrors(true); // show errors after submitting form
		}, [hasErrors, isSubmitting]);

		const onSubmit: SubmitHandler<PasswordInformationData> = useCallback(
			async (data) => {
				const { password } = data;
				onUpdatePasswordInformation(password);
			},
			[onUpdatePasswordInformation]
		);

		return (
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{inputs.map((input) => {
						return <TextInputField key={input.placeholder} {...input} />;
					})}
					<PrimaryButton
						title={t('profile_page_upload_avatar_modal_save_button')}
						loading={loadingUpdatedPassword}
						disabled={disabled}
						className={styles.saveButton}
					/>
				</form>
			</div>
		);
	}
);
