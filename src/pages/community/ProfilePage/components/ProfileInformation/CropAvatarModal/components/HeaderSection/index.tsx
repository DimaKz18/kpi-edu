import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from 'common/icons/common';
import styles from './styles.module.scss';

type Props = {
	onCloseClick: () => void;
	onSaveClick: () => void;
};

export const HeaderSection = memo(({ onCloseClick, onSaveClick }: Props) => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<CloseIcon className={styles.icon} color='white' onClick={onCloseClick} />
			<p className={styles.saveButton} onClick={onSaveClick}>
				{t('profile_page_upload_avatar_modal_save_button')}
			</p>
		</div>
	);
});
