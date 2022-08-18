import { Navigate } from 'react-router-dom';

type Props = {
	element: JSX.Element;
};

export const ProtectedRoute = ({ element }: Props) => {
	// TODO: add useIsAuthenticated hook and redirect if it returns false

	if (true) return <Navigate to='/login' />;

	return element;
};
