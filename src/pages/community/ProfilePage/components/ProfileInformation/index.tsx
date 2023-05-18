import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { selectProfile } from 'service/profile';
import { useAppSelector } from 'store';
import { useDebounceCallback } from 'hooks';
import { validateProfile } from './utils';
import { UpdatedProfile, UpdatedProfileErrors, UpdatedProfileKey } from './types';
import { Avatar } from 'common/components/Avatar';
import { PrimaryButton } from 'common/components/PrimaryButton';
import { SecondaryButton } from 'common/components/SecondaryButton';
import { EditProfileModal } from '../EditProfileModal';
import styles from './styles.module.scss';

type Props = {
	onSaveProfileClick: () => void;
	onLogoutClick: () => void;
};

export const ProfileInformation = memo(({ onSaveProfileClick, onLogoutClick }: Props) => {
	const [showEditProfileModal, setShowEditProfileModal] = useState(false);
	const [updatedProfile, setUpdatedProfile] = useState<UpdatedProfile>();
	const [errors, setErrors] = useState<UpdatedProfileErrors>({});
	const [showErrors, setShowErrors] = useState(false);

	const { t } = useTranslation();
	const profile = useAppSelector(selectProfile);

	const hasErrors = Object.values(errors).length > 0;
	const disabled = hasErrors && showErrors;

	useEffect(() => {
		if (profile) {
			const updatedProfile: UpdatedProfile = {
				firstName: profile.first_name,
				lastName: profile.last_name,
				avatar: profile.avatar || null,
			};

			setUpdatedProfile(updatedProfile);
		}
	}, [profile]);

	useEffect(() => {
		if (!updatedProfile) return;
		setShowErrors(false);
		setErrors(validateProfile(updatedProfile, t)); // validate profile
	}, [updatedProfile, t]);

	const handleToggleProfileModal = useCallback(() => {
		setShowEditProfileModal((prev) => !prev);
	}, []);

	const handleProfileChange = useCallback(
		(field: UpdatedProfileKey, value: string | null) => {
			if (!updatedProfile) return;
			const newUpdatedProfile = {
				...updatedProfile,
				[field]: value,
			};
			setUpdatedProfile(newUpdatedProfile);
		},
		[updatedProfile]
	);

	const debouncedProfileChange = useDebounceCallback(
		(field: UpdatedProfileKey, value: string | null) => handleProfileChange(field, value),
		200
	);

	const handleSaveProfileClick = useCallback(() => {
		if (hasErrors || !updatedProfile) {
			setShowErrors(true);
			return;
		}
		console.log(updatedProfile); // get profileDto
		// const profileDto = getProfileDto(updatedProfile); // submit profile
		// onSaveProfileClick(profileDto);
	}, [hasErrors, updatedProfile]);

	return updatedProfile ? (
		<div className={styles.container}>
			<Avatar
				profileImage={null}
				avatarContainerClassName={styles.avatar}
				avatarClassName={styles.avatar}
			/>
			<div className={styles.personalInformationContainer}>
				<p className={styles.fullName}>Will Mitchel</p>
				<div className={styles.actionButtonsContainer}>
					<PrimaryButton
						title={t('profile_page_edit_button')}
						onClick={handleToggleProfileModal}
					/>
					<SecondaryButton
						title={t('profile_page_logout_button')}
						className={styles.logoutButton}
						onClick={onLogoutClick}
					/>
				</div>
			</div>
			<EditProfileModal
				show={showEditProfileModal}
				firstName={updatedProfile.firstName}
				lastName={updatedProfile.lastName}
				disabled={disabled}
				errors={errors}
				showErrors={showErrors}
				avatar={updatedProfile.avatar}
				onCloseClick={handleToggleProfileModal}
				onProfileChange={debouncedProfileChange}
				onSaveProfileClick={handleSaveProfileClick}
			/>
		</div>
	) : null;
});
