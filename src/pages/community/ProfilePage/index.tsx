import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAuth } from '@firebase/auth';
import { useAppDispatch, useAppSelector } from 'store';
import {
	selectLoadingUpdatedPassword,
	selectLoadingUpdatedProfile,
	selectPasswordUpdated,
	selectProfile,
	setPasswordUpdated,
	setProfile,
	updatePassword,
	updateProfile,
} from 'service/profile';
import { PasswordDto, ProfileDto } from 'service/profile/dtos';
import { PERSONAL_INFORMATION_TAB } from './helpers';
import { NavigationLayout } from 'layout/NavigationLayout';
import { ProfileInformation } from './components/ProfileInformation';
import { Tabs } from './components/Tabs';
import { PersonalInformationSection } from './components/PersonalInformationSection';
import { PasswordInformationSection } from './components/PasswordInformationSection';
import { SecondaryButton } from 'common/components/SecondaryButton';
import styles from './styles.module.scss';

export const ProfilePage = () => {
	const [selectedTab, setSelectedTab] = useState(PERSONAL_INFORMATION_TAB);

	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const profile = useAppSelector(selectProfile);
	const passwordUpdated = useAppSelector(selectPasswordUpdated);
	const loadingUpdatedProfile = useAppSelector(selectLoadingUpdatedProfile);
	const loadingUpdatedPassword = useAppSelector(selectLoadingUpdatedPassword);

	const selectedPersonalInformationSection = selectedTab === PERSONAL_INFORMATION_TAB;

	useEffect(() => {
		// logout after updating password
		if (passwordUpdated) {
			getAuth().signOut();
			dispatch(setProfile(undefined));
			localStorage.removeItem('token');
			dispatch(setPasswordUpdated(false));
		}
	}, [dispatch, passwordUpdated]);

	const handleTabClick = useCallback((tab: number) => {
		setSelectedTab(tab);
	}, []);

	const handleUpdateAvatar = useCallback(
		(avatar: string | null) => {
			if (!profile) return;
			const updatedProfile: ProfileDto = {
				first_name: profile.first_name,
				last_name: profile.last_name,
				is_author: profile.is_author,
				avatar,
			};
			dispatch(updateProfile(updatedProfile));
		},
		[dispatch, profile]
	);

	const handleUpdatePersonalInformation = useCallback(
		(firstName: string, lastName: string) => {
			if (!profile) return;
			const updatedProfile: ProfileDto = {
				first_name: firstName,
				last_name: lastName,
				is_author: profile.is_author,
				avatar: profile.avatar,
			};
			dispatch(updateProfile(updatedProfile));
		},
		[dispatch, profile]
	);

	const handleUpdatePasswordInformation = useCallback(
		(newPassword: string) => {
			const passwordDto: PasswordDto = {
				newPassword,
				repeatNewPassword: newPassword,
			};
			dispatch(updatePassword(passwordDto));
		},
		[dispatch]
	);

	const onLogoutClick = useCallback(() => {
		getAuth().signOut();
		dispatch(setProfile(undefined));
		localStorage.removeItem('token');
	}, [dispatch]);

	return (
		<NavigationLayout>
			{profile ? (
				<div className={styles.container}>
					<ProfileInformation
						avatar={profile.avatar}
						firstName={profile.first_name}
						lastName={profile.last_name}
						onUpdateAvatar={handleUpdateAvatar}
					/>
					<Tabs selectedTab={selectedTab} onTabClick={handleTabClick} />
					{selectedPersonalInformationSection ? (
						<PersonalInformationSection
							initialFirstName={profile.first_name}
							initialLastName={profile.last_name}
							loadingUpdatedProfile={loadingUpdatedProfile}
							onUpdatePersonalInformation={handleUpdatePersonalInformation}
						/>
					) : (
						<PasswordInformationSection
							loadingUpdatedPassword={loadingUpdatedPassword}
							onUpdatePasswordInformation={handleUpdatePasswordInformation}
						/>
					)}
					<SecondaryButton
						title={t('profile_page_logout_button')}
						className={styles.logoutButton}
						onClick={onLogoutClick}
					/>
				</div>
			) : (
				<></>
			)}
		</NavigationLayout>
	);
};
