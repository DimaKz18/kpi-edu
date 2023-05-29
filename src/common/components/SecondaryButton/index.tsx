import { memo, MouseEvent } from 'react';
import clsx from 'clsx';
import { PrimaryButton } from '../PrimaryButton';
import styles from './styles.module.scss';

type Props = {
	title: string;
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export const SecondaryButton = memo(
	({ title, loading, disabled, className, onClick }: Props) => {
		const buttonClass = clsx(styles.button, className);

		return (
			<PrimaryButton
				title={title}
				loading={loading}
				disabled={disabled}
				className={buttonClass}
				onClick={onClick}
			/>
		);
	}
);
