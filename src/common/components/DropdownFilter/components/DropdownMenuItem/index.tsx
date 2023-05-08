import { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	title: string;
	selected: boolean;
	onFilterClick: () => void;
};

export const DropdownMenuItem = memo(({ title, selected, onFilterClick }: Props) => {
	const containerClass = clsx(styles.container, selected && styles.selectedContainer);

	return (
		<div className={containerClass} onClick={onFilterClick}>
			<p className={styles.title}>{title}</p>
		</div>
	);
});
