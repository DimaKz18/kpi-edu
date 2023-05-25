import { memo, MouseEvent } from 'react';
import { ClipLoader } from 'react-spinners';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	title: string;
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export const PrimaryButton = memo(
	({ title, loading, disabled, className, onClick }: Props) => {
		const buttonType = disabled ? 'button' : 'submit';
		const buttonClass = clsx(
			styles.button,
			disabled ? styles.disabledButton : styles.hoveredButton,
			className
		);

		const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
			if (disabled || !onClick) return;
			onClick(e);
		};

		return (
			<button className={buttonClass} type={buttonType} onClick={handleClick}>
				{loading ? <ClipLoader size={20} color='white' /> : title}
			</button>
		);
	}
);
