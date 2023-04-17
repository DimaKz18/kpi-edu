import { useCallback, useState } from 'react';
import { TFunction } from 'react-i18next';
import { getAuth, signInWithEmailAndPassword, User } from '@firebase/auth';

export const useAuth = (t: TFunction) => {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState('');
	const [user, setUser] = useState<User | null>(null);

	const auth = getAuth();

	const login = useCallback(
		async (email: string, password: string) => {
			setLoading(true);

			try {
				const user = (await signInWithEmailAndPassword(auth, email, password)).user;
				if (user) {
					setUser(user);
				} else {
					setServerError(t('login_page_error'));
				}
			} catch (e) {
				setServerError(t('login_page_error'));
			}

			setLoading(false);
		},
		[auth, t]
	);

	const signUp = useCallback(() => {}, []);

	const clearServerError = useCallback(() => {
		setServerError('');
	}, []);

	return {
		login,
		signUp,
		clearServerError,
		user,
		loading,
		serverError,
	};
};
