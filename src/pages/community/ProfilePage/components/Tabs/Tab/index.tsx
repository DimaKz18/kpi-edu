import { memo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { showHideAnimationVariants } from 'utils/animations';
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
			<motion.div
				variants={showHideAnimationVariants}
				initial={'initial'}
				animate={selected ? 'show' : 'hide'}
				exit={'hide'}
				transition={{ duration: 0.4 }}
				className={styles.underline}
			/>
		</li>
	);
});
