import { createContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import {
	fetchProfile,
	selectLoadingProfile,
	setLoadingProfile,
} from '../service/profile';
import { useIsAuthenticated, useMountEffect } from '../hooks';
import { exploreRoute, loginRoute, signUpRoute } from 'routes/routes';

type Props = {
	children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authId = useIsAuthenticated();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const localToken = localStorage.getItem('token');
	const redirectToLoginPage =
		(!localToken || (!loadingProfile && !authId)) && !signUpRoute;
	const redirectToExplorePage = !loadingProfile && authId && (loginRoute || signUpRoute);

	const auth = getAuth();
	const AuthContext = createContext(null);

	useMountEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (profile) => {
			if (profile) {
				const token = await profile.getIdToken();
				localStorage.setItem('token', token);
				dispatch(fetchProfile());
			} else {
				dispatch(setLoadingProfile(false));
			}
		});

		return () => unsubscribe();
	});

	useEffect(() => {
		if (redirectToLoginPage) navigate(loginRoute);
		if (redirectToExplorePage) navigate(exploreRoute);
	}, [navigate, redirectToExplorePage, redirectToLoginPage]);

	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
