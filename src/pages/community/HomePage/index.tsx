import { getAuth } from '@firebase/auth';
import { setProfile } from '../../../service/profile';
import { useAppDispatch } from '../../../store';

export const HomePage = () => {
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		getAuth().signOut();
		dispatch(setProfile(undefined));
	};

	return (
		<div>
			<button onClick={onLogoutClick}>Logout</button>
		</div>
	);
};
