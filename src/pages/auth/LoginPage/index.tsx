import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../../store';
import { login } from '../../../service/profile';
import { Grid } from '@mui/material';
import { useStyles } from './styles';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyles();
	const dispatch = useAppDispatch();

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
		dispatch(login(loginData));
		setEmail('');
		setPassword('');
	};

	return (
		<Grid container direction='column' alignItems='center' className={classes.root}>
			<input value={email} onChange={onEmailChange} />
			<input value={password} onChange={onPasswordChange} />
			<button onClick={onLoginClick}>Login</button>
		</Grid>
	);
};
