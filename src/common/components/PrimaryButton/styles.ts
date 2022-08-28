import { makeStyles } from '@mui/styles';
import { BackgroundYellowColor, DarkCyanColor } from '../../../utils';

export const useStyles = makeStyles(() => ({
	root: {
		padding: '4px 42px',
		minWidth: 136,
		borderRadius: 100,
		boxShadow: 'none',
		transition: 'none',
		textTransform: 'none',
		backgroundColor: BackgroundYellowColor,
		color: DarkCyanColor,
		'&:hover': {
			boxShadow: '-1px 2px 4px rgba(11, 37, 69, 0.25)',
			transition: '0.2s',
			backgroundColor: BackgroundYellowColor,
		},
		'&:disabled': {},
	},
}));
