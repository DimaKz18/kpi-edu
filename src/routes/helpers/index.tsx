import { Navigate } from 'react-router-dom';
import { RouteItem } from '../types';
import { rootRoute, loginRoute, signUpRoute, exploreRoute } from 'routes/routes';
import { LoginPage } from 'pages/auth/LoginPage';
import { SignUpPage } from 'pages/auth/SignUpPage';
import { ExplorePage } from 'pages/community/ExplorePage';

export const PUBLIC_ROUTES: Array<RouteItem> = [
	{
		path: rootRoute,
		element: <Navigate to={loginRoute} />,
	},
	{
		path: loginRoute,
		element: <LoginPage />,
	},
	{
		path: signUpRoute,
		element: <SignUpPage />,
	},
];

export const PROTECTED_ROUTES: Array<RouteItem> = [
	{
		path: exploreRoute,
		element: <ExplorePage />,
	},
];
