import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Grid } from '@mui/material';
import { UserData, UserDataField } from './types';
import { AuthLayout } from '../../../layout/AuthLayout';
import { SIGNUP_TAB } from '../../../layout/AuthLayout/helpers';
import { InputFields } from './components/InputFields';

export const SignUpPage = () => {
	const [userData, setUserData] = useState<UserData>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const classes = useStyles();
	const { t } = useTranslation();

	const handleSignUpClick = () => {
		console.log(userData);
	};

	const handleUserDataChange = (
		value: ChangeEvent<HTMLInputElement>,
		field: UserDataField
	) => {
		setUserData({
			...userData,
			[field]: value.target.value,
		});
	};

	return (
		<AuthLayout
			activeTab={SIGNUP_TAB}
			buttonTitle={t('signup_page_button')}
			loading={false}
			onClick={handleSignUpClick}
		>
			<Grid container direction='column' className={classes.root}>
				<InputFields userData={userData} onChange={handleUserDataChange} />
			</Grid>
		</AuthLayout>
	);
};
