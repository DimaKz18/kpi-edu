import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectLoadingProfile } from 'service/profile';
import { useIsAuthenticated, useIsFirstRender } from 'hooks';
import { login } from 'routes/routes';

type Props = {
	element: JSX.Element;
};

export const ProtectedRoute = ({ element }: Props) => {
	const authId = useIsAuthenticated();
	const isFirstRender = useIsFirstRender();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const isNotAuthorized = !authId && !loadingProfile && !isFirstRender;

	if (isNotAuthorized) return <Navigate to={login} />;

	return element;
};
