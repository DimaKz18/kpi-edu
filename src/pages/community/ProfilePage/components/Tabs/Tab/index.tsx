import { memo } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

type Props = {
	title: string;
	selected: boolean;
	onTabClick: () => void;
};

export const Tab = memo(({ title, selected, onTabClick }: Props) => {
	const titleClass = clsx(styles.title, selected && styles.activeTab);

	return (
		<li onClick={onTabClick} className={styles.container}>
			<p className={titleClass}>{title}</p>
			{selected && <motion.div className={styles.underline} layoutId='underline' />}
		</li>
	);
});
