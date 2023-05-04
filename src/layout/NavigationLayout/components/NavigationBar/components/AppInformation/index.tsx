import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { LogoIcon } from 'common/icons/common';
import styles from './styles.module.scss';

export const AppInformation = memo(() => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<LogoIcon />
			<p className={styles.title}>{t('navigation_layout_app_title')}</p>
		</div>
	);
});
