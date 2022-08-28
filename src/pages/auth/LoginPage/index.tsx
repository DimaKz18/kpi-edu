import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store';
import { login } from '../../../service/profile';
import { useStyles } from './styles';
import { Grid } from '@mui/material';
import { AuthLayout } from '../../../layout/AuthLayout';
import { LOGIN_TAB } from '../../../layout/AuthLayout/helpers';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyles();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onLoginClick = () => {
		const loginData = {
			email,
			password,
		};

		// dispatch(login(loginData));
	};

	return (
		<AuthLayout
			activeTab={LOGIN_TAB}
			buttonTitle={t('login_page_button')}
			onClick={onLoginClick}
		>
			<Grid container direction='column' alignItems='center' className={classes.root}>
				<input value={email} onChange={onEmailChange} />
				<input value={password} onChange={onPasswordChange} />
			</Grid>
		</AuthLayout>
	);
};
