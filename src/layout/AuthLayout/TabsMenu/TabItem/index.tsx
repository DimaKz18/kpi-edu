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
		<div className={styles.container}>
			<p className={tabClass} onClick={onTabClick}>
				{title}
			</p>
			{active && <div className={styles.underline} />}
		</div>
	);
});
