import { useCallback, useState } from 'react';
import { TFunction } from 'react-i18next';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { RegisterDto } from 'service/profile/dtos';
import { useAppDispatch } from 'store';
import { fetchProfile, registerProfile } from 'service/profile';

export const useAuth = (t: TFunction) => {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState('');

	const auth = getAuth();
	const dispatch = useAppDispatch();

	const login = useCallback(
		async (email: string, password: string) => {
			setLoading(true);

			try {
				const user = (await signInWithEmailAndPassword(auth, email, password)).user;

				if (user) {
					dispatch(fetchProfile());
				} else {
					setServerError(t('login_page_error'));
				}
			} catch (e) {
				setServerError(t('login_page_error'));
			}

			setLoading(false);
		},
		[auth, dispatch, t]
	);

	const register = useCallback(
		async (data: RegisterDto) => {
			setLoading(true);

			try {
				await dispatch(registerProfile(data));
			} catch (e) {}

			setLoading(false);
		},
		[dispatch]
	);

	const clearServerError = useCallback(() => {
		setServerError('');
	}, []);

	return {
		login,
		register,
		clearServerError,
		loading,
		serverError,
	};
};
