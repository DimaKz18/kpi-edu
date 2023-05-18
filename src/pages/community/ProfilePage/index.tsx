import { getAuth } from '@firebase/auth';
import { useAppDispatch } from 'store';
import { setProfile } from 'service/profile';
import { NavigationLayout } from 'layout/NavigationLayout';

export const ProfilePage = () => {
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		getAuth().signOut();
		dispatch(setProfile(undefined));
		localStorage.removeItem('token');
	};

	return (
		<NavigationLayout>
			<div>
				Profile
				<button onClick={onLogoutClick}>Logout</button>
			</div>
		</NavigationLayout>
	);
};
