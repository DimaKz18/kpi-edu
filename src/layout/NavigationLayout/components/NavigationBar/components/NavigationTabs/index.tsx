import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { bookmarksRoute, exploreRoute, profileRoute } from 'routes/routes';
import { TabItem } from './TabItem';
import styles from './styles.module.scss';

type Props = {
	currentPathname: string;
	onTabClick: (route: string) => void;
};

export const NavigationTabs = memo(({ currentPathname, onTabClick }: Props) => {
	const { t } = useTranslation();

	const tabs = useMemo(() => {
		return [
			{
				title: t('navigation_layout_explore_navigation_tab_title'),
				active: currentPathname === exploreRoute,
				onTabClick: () => onTabClick(exploreRoute),
			},
			{
				title: t('navigation_layout_bookmarks_navigation_tab_title'),
				active: currentPathname === bookmarksRoute,
				onTabClick: () => onTabClick(bookmarksRoute),
			},
			{
				title: t('navigation_layout_profile_navigation_tab_title'),
				active: currentPathname === profileRoute,
				onTabClick: () => onTabClick(profileRoute),
			},
		];
	}, [onTabClick, currentPathname, t]);

	return (
		<div className={styles.container}>
			{tabs.map((tab) => {
				return (
					<TabItem
						key={tab.title}
						active={tab.active}
						title={tab.title}
						onTabClick={tab.onTabClick}
					/>
				);
			})}
		</div>
	);
});
