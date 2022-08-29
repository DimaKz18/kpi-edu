import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Grid } from '@mui/material';
import { UserData, UserDataField } from '../../helpers';
import { InputField } from '../../../../../common/components/InputField';

type Props = {
	userData: UserData;
	onChange: (value: ChangeEvent<HTMLInputElement>, field: UserDataField) => void;
};

export const InputFields = memo(({ userData, onChange }: Props) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const inputFields = {
		userNameData: [
			{
				value: userData.firstName,
				label: t('signup_page_first_name_field_label'),
				id: 'first-name-input',
				containerClassName: classes.userDataContainer,
				onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'firstName'),
			},
			{
				value: userData.lastName,
				label: t('signup_page_last_name_field_label'),
				id: 'last-name-input',
				containerClassName: classes.userDataContainer,
				onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'lastName'),
			},
		],
		personalInfoData: [
			{
				value: userData.email,
				label: t('signup_page_email_field_label'),
				id: 'email-input',
				containerClassName: classes.personalDataContainer,
				onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'email'),
			},
			{
				value: userData.password,
				label: t('signup_page_password_field_label'),
				type: 'password',
				id: 'password-input',
				containerClassName: classes.personalDataContainer,
				onChange: (value: ChangeEvent<HTMLInputElement>) => onChange(value, 'password'),
			},
			{
				value: userData.confirmPassword,
				label: t('signup_page_confirm_password_field_label'),
				type: 'password',
				id: 'confirm-password-input',
				containerClassName: classes.personalDataContainer,
				onChange: (value: ChangeEvent<HTMLInputElement>) =>
					onChange(value, 'confirmPassword'),
			},
		],
	};

	return (
		<>
			<Grid container justifyContent='space-between' className={classes.container}>
				{inputFields.userNameData.map((field) => {
					return (
						<InputField
							key={field.id}
							value={field.value}
							variant='standard'
							label={field.label}
							id={field.id}
							containerClassName={field.containerClassName}
							onChange={field.onChange}
						/>
					);
				})}
			</Grid>
			{inputFields.personalInfoData.map((field) => {
				return (
					<InputField
						key={field.id}
						value={field.value}
						variant='standard'
						label={field.label}
						type={field.type}
						id={field.id}
						containerClassName={field.containerClassName}
						onChange={field.onChange}
					/>
				);
			})}
		</>
	);
});
