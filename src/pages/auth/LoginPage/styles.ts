import { makeStyles } from '@mui/styles';
import { DarkBlueColorTransparent50 } from './../../../utils/colors';

export const useStyles = makeStyles(() => ({
	root: {
		marginTop: 30,
	},
	forgotPassword: {
		marginTop: 10,
		textAlign: 'right',
		cursor: 'pointer',
		color: DarkBlueColorTransparent50,
	},
}));
