import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import { selectLoadingProfile } from '../../../service/profile';
import { useIsAuthenticated } from '../../../hooks';

type Props = {
	element: JSX.Element;
};

export const ProtectedRoute = ({ element }: Props) => {
	const authId = useIsAuthenticated();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const isNotAuthorised = !authId && !loadingProfile;

	if (isNotAuthorised) return <Navigate to='/login' />;

	return element;
};
