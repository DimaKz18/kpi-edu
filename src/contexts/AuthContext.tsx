import { createContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../store';
import { setUser } from '../service/profile';
import { useIsAuthenticated, useMountEffect } from '../hooks';

type Props = {
	children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const auth = getAuth();
	const AuthContext = createContext(null);
	const authId = useIsAuthenticated();

	useMountEffect(() => {
		const unsibscribe = auth.onAuthStateChanged((user) => {
			if (!user) return;
			// dispatch(setUser(user));
		});

		return unsibscribe;
	});

	useEffect(() => {
		navigate(`${authId ? '/home' : '/login'}`);
	}, [authId]);

	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
