import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Grid, Box } from '@mui/material';
import { UA_TAB, ENG_TAB } from '../../helpers';
import { TabItem } from '../TabItem';

export const Tabs = memo(() => {
	const [activeTab, setActiveTab] = useState(ENG_TAB);

	const classes = useStyles();
	const { t } = useTranslation();

	const handleTabClick = useCallback((tab: number) => {
		setActiveTab(tab);
	}, []);

	return (
		<Grid container item alignItems='center' className={classes.container}>
			<TabItem
				activeTab={activeTab}
				value={UA_TAB}
				title={t('auth_page_ua_language_tab')}
				onTabClick={handleTabClick}
			/>
			<Box className={classes.verticalLine} />
			<TabItem
				activeTab={activeTab}
				value={ENG_TAB}
				title={t('auth_page_eng_language_tab')}
				onTabClick={handleTabClick}
			/>
		</Grid>
	);
});
