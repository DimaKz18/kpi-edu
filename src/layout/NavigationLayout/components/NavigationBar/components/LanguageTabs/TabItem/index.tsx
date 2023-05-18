import { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	active: boolean;
	title: string;
	onTabClick: () => void;
};

export const TabItem = memo(({ active, title, onTabClick }: Props) => {
	const tabClass = clsx(styles.tab, active && styles.activeTab);

	return (
		<p className={tabClass} onClick={onTabClick}>
			{title}
		</p>
	);
});
