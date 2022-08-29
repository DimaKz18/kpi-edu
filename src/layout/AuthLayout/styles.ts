import { makeStyles } from '@mui/styles';
import { LightRed } from '../../utils';

export const useStyles = makeStyles(() => ({
	root: {
		padding: '30px 150px',
	},
	contentWrapper: {
		marginTop: 126,
	},
	formWrapper: {
		width: 'fit-content',
	},
	errorContainer: {
		minHeight: 56,
	},
	error: {
		color: LightRed,
	},
}));
