import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { UserData, UserDataField } from '../../helpers';
import { InputField } from '../../../../../common/components/InputField';

type Props = {
	userData: UserData;
	onChange: (value: ChangeEvent<HTMLInputElement>, field: UserDataField) => void;
};

export const InputFields = memo(({ userData, onChange }: Props) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const inputFields = [
		{
			value: userData.email,
			label: t('login_page_email_field_label'),
			id: 'email-input',
			onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'email'),
		},
		{
			value: userData.password,
			label: t('login_page_password_field_label'),
			id: 'password-input',
			containerClassName: classes.inputContainer,
			onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'password'),
		},
	];

	return (
		<>
			{inputFields.map((field) => {
				return (
					<InputField
						key={field.id}
						value={field.value}
						variant='standard'
						label={field.label}
						id='email-input'
						containerClassName={field.containerClassName}
						onChange={field.onChange}
					/>
				);
			})}
		</>
	);
});
