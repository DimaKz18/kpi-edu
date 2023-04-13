import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store';
import { register } from '../../../service/profile';
import { UserData } from './types';
import { SIGN_UP_TAB } from '../../../layout/AuthLayout/helpers';
import { AuthLayout } from '../../../layout/AuthLayout';
import { TextInputField } from 'common/components/TextInputField';
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
			email: '',
			password: '',
		},
	});

	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const hasErrors = Object.values(errors).length > 0;
	const disabled = hasErrors && showErrors;

	const personalInformationInputs = useMemo(() => {
		return [
			// {
			// 	label: t('signup_page_email_field_label'),
			// 	containerClassName: classes.personalDataContainer,
			// },
			// {
			// 	label: t('signup_page_password_field_label'),
			// 	containerClassName: classes.personalDataContainer,
			// },
			// {
			// 	label: t('signup_page_confirm_password_field_label'),
			// 	containerClassName: classes.personalDataContainer,
			// },
		];
	}, []);

	const onSubmit: SubmitHandler<UserData> = useCallback((data) => {}, []);

	return (
		<AuthLayout activeTab={SIGN_UP_TAB}>
			<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
				{/* {personalInformationInputs.map((input) => {
					return <TextInputField key={input.placeholder} {...input} />;
				})} */}
			</form>
		</AuthLayout>
	);
};
