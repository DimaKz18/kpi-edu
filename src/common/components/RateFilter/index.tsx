import { memo, useCallback } from 'react';
import { RATE_FILTERS_COUNT } from './helpers';
import { FilterItem } from './FilterItem';
import styles from './styles.module.scss';

type Props = {
	selectedFilter: number;
	onFilterClick: (filter: number) => void;
};

export const RateFilter = memo(({ selectedFilter, onFilterClick }: Props) => {
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
		</div>
	);
});
