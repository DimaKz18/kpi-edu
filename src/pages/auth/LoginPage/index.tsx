import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store';
import { login } from '../../../service/profile';
import { useStyles } from './styles';
import { Grid, Typography } from '@mui/material';
import { UserData, UserDataField } from './helpers';
import { AuthLayout } from '../../../layout/AuthLayout';
import { LOGIN_TAB } from '../../../layout/AuthLayout/helpers';
import { InputFields } from './components/InputFields';

export const LoginPage = () => {
	const [userData, setUserData] = useState<UserData>({
		email: '',
		password: '',
	});

	const classes = useStyles();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const handleLoginClick = () => {
		console.log(userData);
		// dispatch(login(loginData));
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
			activeTab={LOGIN_TAB}
			buttonTitle={t('login_page_button')}
			onClick={handleLoginClick}
		>
			<Grid container direction='column' className={classes.root}>
				<InputFields userData={userData} onChange={handleUserDataChange} />
				<Typography variant='body2' className={classes.forgotPassword}>
					{t('login_page_forgot_password')}
				</Typography>
			</Grid>
		</AuthLayout>
	);
};
