import { makeStyles } from '@mui/styles';
import { DarkCyanColor, LightCyanColor } from '../../../../../../utils';

export const useStyles = makeStyles(() => ({
	tab: {
		cursor: 'pointer',
		color: DarkCyanColor,
	},
	activeTab: {
		color: LightCyanColor,
	},
}));
