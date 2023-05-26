import { memo, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { showHideAnimationVariants } from 'utils/animations';
import ReactPortal from 'common/components/ReactPortal';
import { CloseIcon } from 'common/icons/common';
import { CancelSubscriptionIcon } from 'common/icons/profile';
import { PrimaryButton } from 'common/components/PrimaryButton';
import { SecondaryButton } from 'common/components/SecondaryButton';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
	loading: boolean;
	onCloseClick: () => void;
	onDeleteProfileClick: () => void;
};

export const ConfirmationModal = memo(
	({ show, loading, onCloseClick, onDeleteProfileClick }: Props) => {
		const { t } = useTranslation();

		const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();
		};

		return (
			<ReactPortal wrapperId={'delete-profile-modal'}>
				<motion.div
					className={styles.container}
					variants={showHideAnimationVariants}
					initial={'initial'}
					animate={show ? 'show' : 'hide'}
					exit={'hide'}
					transition={{ duration: 0.3 }}
					onClick={onCloseClick}
				>
					<div className={styles.modal} onClick={onModalClick}>
						<CloseIcon className={styles.closeIcon} onClick={onCloseClick} />
						<CancelSubscriptionIcon />
						<p className={styles.title}>{t('profile_page_confirmation_modal_title')}</p>
						<p className={styles.description}>
							{t('profile_page_confirmation_modal_description')}
						</p>
						<div className={styles.actionButtons}>
							<PrimaryButton
								title={t('profile_page_confirmation_modal_cancel_button')}
								onClick={onCloseClick}
							/>
							<SecondaryButton
								title={t('profile_page_confirmation_modal_delete_button')}
								loading={loading}
								className={styles.deleteButton}
								onClick={onDeleteProfileClick}
							/>
						</div>
					</div>
				</motion.div>
			</ReactPortal>
		);
	}
);
