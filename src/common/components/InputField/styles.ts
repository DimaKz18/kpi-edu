import { makeStyles } from '@mui/styles';
import { DarkBlueColor, DarkCyanColor } from '../../../utils';

export const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		'& .MuiInput-underline:before': { borderBottomColor: DarkCyanColor },
		'& .MuiInput-underline:after': { borderBottomColor: DarkCyanColor },

		'&:hover': {
			'& .MuiInput-underline:before': {
				borderBottomColor: DarkCyanColor,
				borderWidth: 1,
			},
		},
	},
	input: {
		padding: '0 0 2px',
		color: DarkCyanColor,
	},
	label: {
		color: DarkBlueColor,
	},
	focusedLabel: {
		color: `${DarkBlueColor} !important`,
	},
}));
