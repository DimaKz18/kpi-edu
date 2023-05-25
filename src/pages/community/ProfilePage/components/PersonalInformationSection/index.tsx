import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PersonalInformationData } from './types';
import {
	MAX_FIRST_NAME_LENGTH,
	MAX_LAST_NAME_LENGTH,
} from 'pages/auth/SignUpPage/helpers';
import { TextInputField } from './TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

type Props = {
	initialFirstName: string;
	initialLastName: string;
	loadingUpdatedProfile: boolean;
	onUpdatePersonalInformation: (firstName: string, lastName: string) => void;
};

export const PersonalInformationSection = memo(
	({
		initialFirstName,
		initialLastName,
		loadingUpdatedProfile,
		onUpdatePersonalInformation,
	}: Props) => {
		const [showErrors, setShowErrors] = useState(false);

		const {
			register,
			handleSubmit,
			watch,
			formState: { errors, isSubmitting },
		} = useForm<PersonalInformationData>({
			defaultValues: {
				firstName: initialFirstName,
				lastName: initialLastName,
			},
		});

		const { t } = useTranslation();

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
			];
		}, [errors.firstName?.message, errors.lastName?.message, register, showErrors, t]);

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

		const onSubmit: SubmitHandler<PersonalInformationData> = useCallback(
			async (data) => {
				const { firstName, lastName } = data;
				if (firstName === initialFirstName && lastName === initialLastName) return;
				onUpdatePersonalInformation(firstName, lastName);
			},
			[initialFirstName, initialLastName, onUpdatePersonalInformation]
		);

		return (
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{inputs.map((input) => {
						return <TextInputField key={input.placeholder} {...input} />;
					})}
					<PrimaryButton
						title={t('profile_page_upload_avatar_modal_save_button')}
						loading={loadingUpdatedProfile}
						disabled={disabled}
						className={styles.saveButton}
					/>
				</form>
			</div>
		);
	}
);
