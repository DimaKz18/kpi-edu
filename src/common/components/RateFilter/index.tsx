import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { showHideAnimationVariants } from 'utils/animations';
import { RATE_FILTERS_COUNT } from './helpers';
import { FilterItem } from './FilterItem';
import styles from './styles.module.scss';

type Props = {
	selectedFilter: number;
	onFilterClick: (filter: number) => void;
};

export const RateFilter = memo(({ selectedFilter, onFilterClick }: Props) => {
	const { t } = useTranslation();

	const filters = new Array(RATE_FILTERS_COUNT).fill('');

	const handleFilterClick = useCallback(
		(filterIdx: number) => {
			if (filterIdx === selectedFilter) return;
			onFilterClick(filterIdx);
		},
		[onFilterClick, selectedFilter]
	);

	return (
		<div className={styles.container}>
			{filters.map((_, idx) => {
				return (
					<FilterItem
						key={idx}
						active={idx + 1 <= selectedFilter}
						onFilterClick={() => handleFilterClick(idx + 1)}
					/>
				);
			})}
			<motion.div
				className={styles.resetButton}
				variants={showHideAnimationVariants}
				initial={'initial'}
				animate={selectedFilter ? 'show' : 'hide'}
				exit={'hide'}
				transition={{ duration: 0.3 }}
				onClick={() => handleFilterClick(0)}
			>
				<p className={styles.title}>{t('media_rate_filter_reset_button')}</p>
			</motion.div>
		</div>
	);
});
