import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from './helpers';

export const AppRoutes = () => {
	const renderPublicRoutes = () => {
		return PUBLIC_ROUTES.map((route) => (
			<Route key={route.path} path={route.path} element={route.element} />
		));
	};

	const renderProtectedRoutes = () => {
		return PROTECTED_ROUTES.map((route) => (
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
