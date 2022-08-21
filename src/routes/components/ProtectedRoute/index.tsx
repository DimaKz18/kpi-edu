import { Navigate } from 'react-router-dom';
import { useIsAuthenticated } from '../../../hooks';

type Props = {
	element: JSX.Element;
};

export const ProtectedRoute = ({ element }: Props) => {
	const authId = useIsAuthenticated();

	if (!authId) return <Navigate to='/login' />;

	return element;
};
