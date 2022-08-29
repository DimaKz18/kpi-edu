import { makeStyles } from '@mui/styles';
import { DarkCyanColor, LightCyanColor } from '../../../../../../utils';

export const useStyles = makeStyles(() => ({
	tab: {
		cursor: 'pointer',
		color: DarkCyanColor,
		transition: '0.2s',
	},
	activeTab: {
		color: LightCyanColor,
		transition: '0.2s',
	},
}));
