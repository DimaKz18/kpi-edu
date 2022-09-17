import { useStyles } from './styles';
import { Grid, Box, Typography } from '@mui/material';
import { NavBar } from './components/NavBar';
import { LogoIcon } from '../../common/icons/common';
import { OwlIcon } from '../../common/icons/auth';
import { TabsMenu } from './components/TabsMenu';
import { PrimaryButton } from '../../common/components/PrimaryButton';

type Props = {
	children: JSX.Element;
	activeTab: number;
	buttonTitle: string;
	loading: boolean;
	error?: string;
	onClick: () => void;
};

export const AuthLayout = ({
	children,
	activeTab,
	buttonTitle,
	loading,
	error,
	onClick,
}: Props) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<NavBar />
			<Grid container justifyContent='space-around' className={classes.contentWrapper}>
				<Grid
					container
					item
					flexDirection='column'
					alignItems='center'
					className={classes.formWrapper}
				>
					<LogoIcon />
					<TabsMenu activeTab={activeTab} />
					{children}
					<Grid
						container
						alignItems='center'
						justifyContent='center'
						className={classes.errorContainer}
					>
						{error && (
							<Typography variant='body2' className={classes.error}>
								{error}
							</Typography>
						)}
					</Grid>
					<PrimaryButton
						variant='contained'
						id='auth-button'
						loading={loading}
						onClick={onClick}
					>
						<Typography variant='body2'>{buttonTitle}</Typography>
					</PrimaryButton>
				</Grid>
				<OwlIcon />
			</Grid>
		</Box>
	);
};
