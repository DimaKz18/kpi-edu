import { memo, ReactNode } from 'react';
import { ClipLoader } from 'react-spinners';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
	children?: ReactNode;
	containerClassName?: string;
};

export const Loader = memo(
	({ show, children, containerClassName }: Props) => {
		const containerClass = clsx(styles.container, containerClassName);

		return show ? (
			<div className={containerClass}>
				<ClipLoader color='#94032e' loading size={24} />
			</div>
		) : (
			<> {children} </>
		);
	}
);
