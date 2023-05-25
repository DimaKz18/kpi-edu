import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFORMATION_TAB, PASSWORD_INFORMATION_TAB } from '../../helpers';
import { Tab } from './Tab';
import styles from './styles.module.scss';

type Props = {
	selectedTab: number;
	onTabClick: (tab: number) => void;
};

export const Tabs = memo(({ selectedTab, onTabClick }: Props) => {
	const { t } = useTranslation();

	const handleTabClick = useCallback(
		(tab: number) => {
			if (tab === selectedTab) return;
			onTabClick(tab);
		},
		[selectedTab, onTabClick]
	);

	const tabs = useMemo(() => {
		return [
			{
				id: PERSONAL_INFORMATION_TAB,
				title: t('profile_page_personal_information_tab'),
			},
			{
				id: PASSWORD_INFORMATION_TAB,
				title: t('profile_page_password_information_tab'),
			},
		];
	}, [t]);

	return (
		<ul className={styles.container}>
			{tabs.map((tab) => {
				return (
					<Tab
						key={tab.id}
						title={tab.title}
						selected={tab.id === selectedTab}
						onTabClick={() => handleTabClick(tab.id)}
					/>
				);
			})}
		</ul>
	);
});
