import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { loginRoute, signUpRoute } from 'routes/routes';
import { LOGIN_TAB, SIGN_UP_TAB } from '../../helpers';
import { TabItem } from './TabItem';
import styles from './styles.module.scss';

type Props = {
	activeTab: number;
};

export const TabsMenu = memo(({ activeTab }: Props) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleTabClick = useCallback(
		(tab: number) => {
			const currentPage = tab === LOGIN_TAB ? loginRoute : signUpRoute;
			navigate(currentPage, { replace: true });
		},
		[navigate]
	);

	return (
		<div className={styles.container}>
			<TabItem
				active={activeTab === LOGIN_TAB}
				title={t('auth_page_login_tab')}
				onTabClick={() => handleTabClick(LOGIN_TAB)}
			/>
			<TabItem
				active={activeTab === SIGN_UP_TAB}
				title={t('auth_page_sign_up_tab')}
				onTabClick={() => handleTabClick(SIGN_UP_TAB)}
			/>
		</div>
	);
});
