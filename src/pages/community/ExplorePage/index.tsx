import { getAuth } from '@firebase/auth';
import { NavigationLayout } from 'layout/NavigationLayout';
import { setProfile } from 'service/profile';
import { useAppDispatch } from 'store';

export const ExplorePage = () => {
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		getAuth().signOut();
		dispatch(setProfile(undefined));
		localStorage.removeItem('token');
	};

	return (
		<NavigationLayout>
			<button onClick={onLogoutClick}>Logout</button>
		</NavigationLayout>
	);
};
