import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store';
import { selectAppLanguage, setAppLanguage } from 'service/app';
import { ENG_LANGUAGE, UA_LANGUAGE } from '../../helpers';
import { TabItem } from './TabItem';
import styles from './styles.module.scss';

export const LanguageTabs = memo(() => {
	const { t, i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const appLanguage = useAppSelector(selectAppLanguage);

	const handleTabClick = useCallback(
		(language: string) => {
			dispatch(setAppLanguage(language));
			i18n.changeLanguage(language);
		},
		[dispatch, i18n]
	);

	return (
		<div className={styles.container}>
			<TabItem
				active={appLanguage === UA_LANGUAGE}
				title={t('navigation_layout_ua_language_tab')}
				onTabClick={() => handleTabClick(UA_LANGUAGE)}
			/>
			<div className={styles.verticalLine} />
			<TabItem
				active={appLanguage === ENG_LANGUAGE}
				title={t('navigation_layout_en_language_tab')}
				onTabClick={() => handleTabClick(ENG_LANGUAGE)}
			/>
		</div>
	);
});
