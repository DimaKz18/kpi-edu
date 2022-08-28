import { memo } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';

type Props = {
	activeTab: number;
	value: number;
	title: string;
	onTabClick: (tab: number) => void;
};

export const TabItem = memo(({ activeTab, value, title, onTabClick }: Props) => {
	const classes = useStyles();

	const tabClass = clsx(classes.tab, activeTab === value && classes.activeTab);

	const onClick = () => {
		onTabClick(value);
	};

	return (
		<Typography variant={'body2'} className={tabClass} onClick={onClick}>
			{title}
		</Typography>
	);
});
