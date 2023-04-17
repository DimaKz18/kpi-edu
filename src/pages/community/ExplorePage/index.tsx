import { getAuth } from '@firebase/auth';
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
		<div>
			<button onClick={onLogoutClick}>Logout</button>
		</div>
	);
};
