import { memo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { profileRoute } from 'routes/routes';
import { useIsAuthenticated } from 'hooks';
import { DefaultAvatarIcon } from 'common/icons/common';
import { AppInformation } from './components/AppInformation';
import { NavigationTabs } from './components/NavigationTabs';
import { LanguageTabs } from './components/LanguageTabs';
import styles from './styles.module.scss';

export const NavigationBar = memo(() => {
	const navigate = useNavigate();
	const location = useLocation();
	const authId = useIsAuthenticated();

	const currentPathname = location.pathname;

	const handleNavigationTabClick = useCallback(
		(route: string) => {
			if (route === currentPathname) return;
			navigate(route, { replace: true });
		},
		[currentPathname, navigate]
	);

	const handleUserAvatarClick = useCallback(() => {
		navigate(profileRoute, { replace: true });
	}, [navigate]);

	return (
		<div className={styles.container}>
			<AppInformation />
			{authId && (
				<NavigationTabs
					currentPathname={currentPathname}
					onTabClick={handleNavigationTabClick}
				/>
			)}
			<div className={styles.wrapper}>
				<LanguageTabs />
				{authId && (
					<DefaultAvatarIcon
						className={styles.avatarIcon}
						onClick={handleUserAvatarClick}
					/>
				)}
			</div>
		</div>
	);
});
