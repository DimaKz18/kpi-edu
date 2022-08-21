import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useIsAuthenticated, useMountEffect } from '../hooks';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PUBLIC_ROUTES, RPOTECTED_ROUTES } from './helpers';

export const AppRoutes = () => {
	const authId = useIsAuthenticated();
	const navigate = useNavigate();

	useMountEffect(() => {
		const token = localStorage.getItem('token');
		// TODO add reauthenticate call
	});

	useEffect(() => {
		navigate(`${authId ? '/home' : '/login'}`);
	}, [authId]);

	const renderPublicRoutes = () => {
		return PUBLIC_ROUTES.map((route) => (
			<Route key={route.path} path={route.path} element={route.element} />
		));
	};

	const renderProtectedRoutes = () => {
		return RPOTECTED_ROUTES.map((route) => (
			<Route
				key={route.path}
				path={route.path}
				element={<ProtectedRoute element={route.element} />}
			/>
		));
	};

	return (
		<Routes>
			{renderPublicRoutes()}
			{renderProtectedRoutes()}

			<Route path='*' element={<div>error</div>} />
		</Routes>
	);
};
