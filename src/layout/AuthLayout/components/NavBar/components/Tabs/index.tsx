import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { selectAppLanguage, setAppLanguage } from '../../../../../../service/app';
import { useStyles } from './styles';
import { Grid, Box } from '@mui/material';
import { ENG_LANGUAGE, UA_LANGUAGE } from '../../helpers';
import { TabItem } from '../TabItem';

export const Tabs = memo(() => {
	const classes = useStyles();

	const { t, i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const appLanguage = useAppSelector(selectAppLanguage);

	const handleTabClick = useCallback((language: string) => {
		dispatch(setAppLanguage(language));
		i18n.changeLanguage(language);
	}, []);

	return (
		<Grid container item alignItems='center' className={classes.container}>
			<TabItem
				currentLanguage={appLanguage}
				value={UA_LANGUAGE}
				title={t('auth_page_ua_language_tab')}
				onTabClick={handleTabClick}
			/>
			<Box className={classes.verticalLine} />
			<TabItem
				currentLanguage={appLanguage}
				value={ENG_LANGUAGE}
				title={t('auth_page_eng_language_tab')}
				onTabClick={handleTabClick}
			/>
		</Grid>
	);
});
