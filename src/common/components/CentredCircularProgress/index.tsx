import clsx from 'clsx';
import { CircularProgress, Grid } from '@mui/material';
import { useStyles } from './styles';

type Props = {
	loaderClassName?: string;
	containerClassName?: string;
	size?: number;
};

export const CentredCircularProgress = ({
	loaderClassName,
	containerClassName,
	size = 30,
}: Props) => {
	const classes = useStyles();
	const loaderClass = clsx(classes.loader, loaderClassName);

	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			className={containerClassName}
		>
			<CircularProgress className={loaderClass} size={size} />
		</Grid>
	);
};
