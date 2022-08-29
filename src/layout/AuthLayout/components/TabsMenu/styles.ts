import { makeStyles } from '@mui/styles';
import { DarkCyanColor, LightCyanColor } from '../../../../utils';

export const useStyles = makeStyles(() => ({
	navigationTabs: {
		justifyContent: 'space-between',
		marginTop: 38,
		width: 276,
	},
	indicator: {
		backgroundColor: LightCyanColor,
	},
	tab: {
		textTransform: 'none',
		padding: 0,
		color: `${DarkCyanColor} !important`,
	},
	activeTab: {
		color: `${LightCyanColor} !important`,
	},
}));
