import { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useAppDispatch } from '../../../store';
import { fetchProfile } from '../../../service/profile';
import { useStyles } from './styles';
import { Grid, Typography } from '@mui/material';
import { UserData, UserDataField } from './types';
import { AuthLayout } from '../../../layout/AuthLayout';
import { LOGIN_TAB } from '../../../layout/AuthLayout/helpers';
import { InputFields } from './components/InputFields';

export const LoginPage = () => {
	const [userData, setUserData] = useState<UserData>({
		email: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const classes = useStyles();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const handleLoginClick = useCallback(async () => {
		setLoading(true);

		try {
			const { email, password } = userData;
			const auth = getAuth();
			const user = (await signInWithEmailAndPassword(auth, email, password)).user;

			if (user) {
				dispatch(fetchProfile());
			}
		} catch (e) {
			setError(t('login_page_error'));
		}

		setLoading(false);
	}, [dispatch, userData]);

	const handleUserDataChange = (
		value: ChangeEvent<HTMLInputElement>,
		field: UserDataField
	) => {
		setError('');
		setUserData({
			...userData,
			[field]: value.target.value,
		});
	};

	return (
		<AuthLayout
			activeTab={LOGIN_TAB}
			buttonTitle={t('login_page_button')}
			loading={loading}
			error={error}
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
