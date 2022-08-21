import { logout } from '../../../service/profile';
import { useAppDispatch } from '../../../store';

export const HomePage = () => {
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<div>
			<button onClick={onLogoutClick}>Logout</button>
		</div>
	);
};
