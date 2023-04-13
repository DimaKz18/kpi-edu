import { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchProfile, selectLoadingProfile } from '../service/profile';
import { useIsAuthenticated, useMountEffect } from '../hooks';

type Props = {
	children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
	const [loadingFirebaseAuth, setLoadingFirebaseAuth] = useState(true);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authId = useIsAuthenticated();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const auth = getAuth();
	const AuthContext = createContext(null);

	const loading = loadingProfile || loadingFirebaseAuth;

	useMountEffect(() => {
		const unsibscribe = auth.onAuthStateChanged(async (profile) => {
			if (profile) {
				const token = await profile.getIdToken();
				localStorage.setItem('token', token);
				dispatch(fetchProfile());
			}
			setLoadingFirebaseAuth(false);
		});

		return unsibscribe;
	});

	useEffect(() => {
		if (loading) return;
		navigate(`${authId ? '/home' : '/login'}`);
	}, [authId, loading]);

	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
