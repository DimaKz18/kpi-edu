import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SecondaryButton } from 'common/components/SecondaryButton';
import { ConfirmationModal } from './ConfirmationModal';
import styles from './styles.module.scss';

type Props = {
  loadingDeleteProfile: boolean;
	onLogoutClick: () => void;
	onDeleteProfileClick: () => void;
};

export const ActionButtons = memo(({ loadingDeleteProfile, onLogoutClick, onDeleteProfileClick }: Props) => {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);

	const handleToggleConfirmationModal = useCallback(() => {
		setShowConfirmationModal((prev) => !prev);
	}, []);

	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<SecondaryButton title={t('profile_page_logout_button')} className={styles.logoutButton} onClick={onLogoutClick} />
			<SecondaryButton
				title={t('profile_page_delete_profile_button')}
				className={styles.deleteProfileButton}
				onClick={handleToggleConfirmationModal}
			/>
			<ConfirmationModal
				show={showConfirmationModal}
        loading={loadingDeleteProfile}
				onCloseClick={handleToggleConfirmationModal}
				onDeleteProfileClick={onDeleteProfileClick}
			/>
		</div>
	);
});
