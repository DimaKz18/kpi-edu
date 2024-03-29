import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { showHideAnimationVariants } from 'utils/animations';
import ReactPortal from 'common/components/ReactPortal';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
};

export const RegisteredProfilePopup = memo(({ show }: Props) => {
	const { t } = useTranslation();

	return (
		<ReactPortal wrapperId={'registered-profile-popup'}>
			<motion.div
				className={styles.container}
				variants={showHideAnimationVariants}
				initial={'initial'}
				animate={show ? 'show' : 'hide'}
				exit={'hide'}
				transition={{ duration: 0.3 }}
			>
				<p className={styles.description}>
					{t('login_page_register_profile_popup_description')}
				</p>
			</motion.div>
		</ReactPortal>
	);
});
