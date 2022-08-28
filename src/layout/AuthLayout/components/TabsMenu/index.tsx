import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { Tabs, Tab, Typography } from '@mui/material';
import { LOGIN_TAB, SIGNUP_TAB } from '../../helpers';

type Props = {
	activeTab: number;
};

export const TabsMenu = memo(({ activeTab }: Props) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleTabChange = (_: React.ChangeEvent<unknown>, newTab: number) => {
		navigate(newTab === LOGIN_TAB ? '/login' : '/signup', { replace: true });
	};

	return (
		<Tabs
			value={activeTab}
			onChange={handleTabChange}
			aria-label='tabs'
			classes={{
				indicator: classes.indicator,
				flexContainer: classes.navigationTabs,
			}}
		>
			<Tab
				value={LOGIN_TAB}
				label={<Typography variant='h2'>{t('auth_page_login_tab')}</Typography>}
				disableRipple
				classes={{
					root: classes.tab,
					selected: classes.activeTab,
				}}
				id='login-tab'
			/>
			<Tab
				value={SIGNUP_TAB}
				label={<Typography variant='h2'>{t('auth_page_signup_tab')}</Typography>}
				disableRipple
				classes={{
					root: classes.tab,
					selected: classes.activeTab,
				}}
				id='signup-tab'
			/>
		</Tabs>
	);
});
