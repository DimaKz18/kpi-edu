import { useCallback } from 'react';
import { getAuth } from '@firebase/auth';
import { useAppDispatch } from 'store';
import { setProfile, updateProfile } from 'service/profile';
import { ProfileDto } from 'service/profile/dtos';
import { NavigationLayout } from 'layout/NavigationLayout';
import { ProfileInformation } from './components/ProfileInformation';
import styles from './styles.module.scss';

export const ProfilePage = () => {
	const dispatch = useAppDispatch();

	const handleSaveProfileClick = useCallback(
		(profile: ProfileDto) => {
			dispatch(updateProfile(profile));
		},
		[dispatch]
	);

	const handleLogoutClick = useCallback(() => {
		getAuth().signOut();
		dispatch(setProfile(undefined));
		localStorage.removeItem('token');
	}, [dispatch]);

	return (
		<NavigationLayout>
			<div className={styles.container}>
				<ProfileInformation
					onSaveProfileClick={handleSaveProfileClick}
					onLogoutClick={handleLogoutClick}
				/>
			</div>
		</NavigationLayout>
	);
};
