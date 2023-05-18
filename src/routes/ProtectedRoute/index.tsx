import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectLoadingProfile } from 'service/profile';
import { useIsAuthenticated } from 'hooks';

type Props = {
	element: JSX.Element;
};

export const ProtectedRoute = ({ element }: Props) => {
	const navigate = useNavigate();
	const authId = useIsAuthenticated();
	const loadingProfile = useAppSelector(selectLoadingProfile);

	const localToken = localStorage.getItem('token');
	const isNotAuthorized = !localToken || (!authId && !loadingProfile);

	useEffect(() => {
		if (isNotAuthorized) navigate(-1);
	}, [isNotAuthorized, navigate]);

	return element;
};
