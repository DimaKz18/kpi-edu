import { DropdownFilter } from 'common/components/DropdownFilter';
import { memo } from 'react';
import styles from './styles.module.scss';

type Props = {};

export const Filters = memo(({}: Props) => {
	return (
		<div className={styles.container}>
			{/* <DropdownFilter filters={[]} selectedFilter='' onFilterClick={() => {}} /> */}
		</div>
	);
});
