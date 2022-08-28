import { makeStyles } from '@mui/styles';
import { DarkCyanColor } from '../../../../../../utils';

export const useStyles = makeStyles(() => ({
	container: {
		width: 'fit-content',
	},
	verticalLine: {
		width: 2,
		height: 16,
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 2,
		backgroundColor: DarkCyanColor,
	},
}));
