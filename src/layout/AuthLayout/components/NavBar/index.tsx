import { memo } from 'react';
import { useStyles } from './styles';
import { Grid } from '@mui/material';
import { DefaultAvatarIcon } from '../../../../common/icons/common';
import { Tabs } from './components/Tabs';

export const NavBar = memo(() => {
	const classes = useStyles();

	return (
		<Grid container justifyContent='flex-end' alignItems='center'>
			<Tabs />
			<DefaultAvatarIcon className={classes.avatarIcon} />
		</Grid>
	);
});
