import { memo } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';

type Props = {
	currentLanguage: string;
	value: string;
	title: string;
	onTabClick: (language: string) => void;
};

export const TabItem = memo(({ currentLanguage, value, title, onTabClick }: Props) => {
	const classes = useStyles();

	const tabClass = clsx(classes.tab, currentLanguage === value && classes.activeTab);

	const onClick = () => {
		onTabClick(value);
	};

	return (
		<Typography variant={'body2'} className={tabClass} onClick={onClick}>
			{title}
		</Typography>
	);
});
