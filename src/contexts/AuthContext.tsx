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

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const authId = useIsAuthenticated();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const auth = getAuth();
	const AuthContext = createContext(null);

	const loading = loadingProfile || loadingFirebaseAuth;

	useMountEffect(() => {
		const unsibscribe = auth.onAuthStateChanged(async (profile) => {
			if (profile) {
				dispatch(fetchProfile());
			}
			setLoadingFirebaseAuth(false);
		});

		return unsibscribe;
	});

	useEffect(() => {
		if (loading) return;
		navigate(`${authId ? '/home' : '/login'}`);
	}, [authId, loading, navigate]);

	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
