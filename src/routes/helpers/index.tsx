import { Navigate } from 'react-router-dom';
import { RouteItem } from '../types';
import {
	rootRoute,
	loginRoute,
	signUpRoute,
	exploreRoute,
	mediaRoute,
	bookmarksRoute,
	profileRoute,
} from 'routes/routes';
import { LoginPage } from 'pages/auth/LoginPage';
import { SignUpPage } from 'pages/auth/SignUpPage';
import { ExplorePage } from 'pages/community/ExplorePage';
import { MediaPage } from 'pages/community/MediaPage';
import { BookmarksPage } from 'pages/community/BookmarksPage';
import { ProfilePage } from 'pages/community/ProfilePage';

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
	{
		path: mediaRoute,
		element: <MediaPage />,
	},
	{
		path: bookmarksRoute,
		element: <BookmarksPage />,
	},
	{
		path: profileRoute,
		element: <ProfilePage />,
	},
];
