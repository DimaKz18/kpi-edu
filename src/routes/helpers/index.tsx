import { RouteItem } from '../types';

export const PUBLIC_ROUTES: Array<RouteItem> = [
	{
		path: '/',
		element: <div />,
	},
	{
		path: '/login',
		element: <div>login</div>,
	},
	{
		path: '/signup',
		element: <div>sign up</div>,
	},
];

export const RPOTECTED_ROUTES: Array<RouteItem> = [
	{
		path: '/home',
		element: <div>home</div>,
	},
];
