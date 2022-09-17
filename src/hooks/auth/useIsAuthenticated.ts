import { selectProfile } from '../../service/profile/selectors';
import { useAppSelector } from '../../store';

export const useIsAuthenticated = () => {
	return useAppSelector(selectProfile);
};
