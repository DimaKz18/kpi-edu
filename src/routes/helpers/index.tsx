import { Navigate } from 'react-router-dom';
import { LoginPage } from '../../pages/auth/LoginPage';
import { SignUpPage } from '../../pages/auth/SignUpPage';
import { HomePage } from '../../pages/community/HomePage';
import { RouteItem } from '../types';

export const PUBLIC_ROUTES: Array<RouteItem> = [
	{
		path: '/',
		element: <Navigate to='/login' />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <SignUpPage />,
	},
];

export const PROTECTED_ROUTES: Array<RouteItem> = [
	{
		path: '/home',
		element: <HomePage />,
	},
];
