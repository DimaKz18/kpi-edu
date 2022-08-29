import { ChangeEvent, memo } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useStyles } from './styles';
import clsx from 'clsx';

type Props = TextFieldProps & {
	value: string;
	variant: 'filled' | 'outlined' | 'standard';
	label?: string;
	containerClassName?: string;
	onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = memo(
	({ value, variant, label, containerClassName, type, id, onChange }: Props) => {
		const classes = useStyles();

		const rootClass = clsx(classes.root, containerClassName);

		return (
			<TextField
				value={value}
				variant={variant}
				label={label}
				type={type ? type : 'text'}
				id={`textfield-${id}`}
				className={rootClass}
				inputProps={{
					className: classes.input,
				}}
				InputLabelProps={{
					classes: {
						root: classes.label,
						focused: classes.focusedLabel,
					},
				}}
				onChange={onChange}
			/>
		);
	}
);
