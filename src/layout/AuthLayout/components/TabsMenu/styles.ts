import { makeStyles } from '@mui/styles';
import { DarkCyanColor, LightCyanColor } from '../../../../utils';

export const useStyles = makeStyles(() => ({
	navigationTabs: {
		justifyContent: 'space-between',
		minWidth: 376,
		marginTop: 38,
	},
	indicator: {
		backgroundColor: LightCyanColor,
	},
	tab: {
		minHeight: 0,
		minWidth: 0,
		padding: 0,
		textTransform: 'none',
		color: `${DarkCyanColor} !important`,
	},
	activeTab: {
		color: `${LightCyanColor} !important`,
	},
}));
