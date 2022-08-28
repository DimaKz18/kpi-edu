import { memo } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';
import { Button, ButtonProps } from '@mui/material';
import { CentredCircularProgress } from '../CentredCircularProgress';

type Props = ButtonProps & {
	variant: 'contained' | 'outlined' | 'text';
	onClick?: () => void;
	submitType?: boolean;
	disabled?: boolean;
	loading?: boolean;
};

export const PrimaryButton = memo(
	({
		className,
		variant,
		children,
		onClick,
		submitType,
		disabled,
		id,
		loading,
		...others
	}: Props) => {
		const classes = useStyles();

		const rootClass = clsx(classes.root, className);

		return (
			<Button
				className={rootClass}
				variant={variant}
				onClick={onClick}
				type={submitType ? 'submit' : 'button'}
				disabled={disabled}
				id={`button-${id}`}
				{...others}
			>
				{!loading ? children : <CentredCircularProgress size={20} />}
			</Button>
		);
	}
);
