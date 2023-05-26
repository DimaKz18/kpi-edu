import { memo } from 'react';
import { ActiveStarIcon, InactiveStarIcon } from 'common/icons/community';
import styles from './styles.module.scss';

type Props = {
	active: boolean;
	onFilterClick: () => void;
};

export const FilterItem = memo(({ active, onFilterClick }: Props) => {
	return (
		<div className={styles.container}>
			{active ? (
				<ActiveStarIcon onClick={onFilterClick} />
			) : (
				<InactiveStarIcon className={styles.inactiveIcon} onClick={onFilterClick} />
			)}
		</div>
	);
});
