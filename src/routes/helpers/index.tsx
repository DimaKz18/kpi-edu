import { LoginPage } from '../../pages/auth/LoginPage';
import { HomePage } from '../../pages/community/HomePage';
import { RouteItem } from '../types';

export const PUBLIC_ROUTES: Array<RouteItem> = [
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <div>sign up</div>,
	},
];

export const RPOTECTED_ROUTES: Array<RouteItem> = [
	{
		path: '/home',
		element: <HomePage />,
	},
];
