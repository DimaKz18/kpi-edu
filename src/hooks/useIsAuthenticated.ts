import { selectUser } from './../service/profile/selectors';
import { useAppSelector } from '../store';

export const useIsAuthenticated = () => {
	return useAppSelector(selectUser);
};
