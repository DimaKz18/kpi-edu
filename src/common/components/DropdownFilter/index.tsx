import { memo, useCallback, useRef, useState } from 'react';
import { FilterType } from './types';
import { OpenArrowIcon, CloseArrowIcon } from 'common/icons/common';
import { DropdownMenu } from './components/DropdownMenu';
import styles from './styles.module.scss';

type Props = {
	filters: FilterType[];
	selectedFilter: string;
	filterTitle: string;
	onFilterClick: (filter?: string) => void;
};

export const DropdownFilter = memo(
	({ filters, selectedFilter, filterTitle, onFilterClick }: Props) => {
		const [showDropdownMenu, setShowDropdownMenu] = useState(false);

		const selectedFilterRef = useRef<HTMLDivElement>(null);

		const onToggleDropdownMenu = useCallback(() => {
			setShowDropdownMenu((prev) => !prev);
		}, []);

		const handleCloseDropdownMenu = useCallback((event?: Event) => {
			if (selectedFilterRef.current?.contains((event?.target as Node) || null)) return;
			setShowDropdownMenu(false);
		}, []);

		const handleFilterClick = useCallback(
			(filter?: string) => {
				if (filter === selectedFilter) return;
				onFilterClick(filter);
				setTimeout(() => handleCloseDropdownMenu(), 100); // to close drop down menu with small delay
			},
			[handleCloseDropdownMenu, onFilterClick, selectedFilter]
		);

		const handleRemoveFilterClick = useCallback(() => {
			if (!selectedFilter) return;
			onFilterClick();
			setTimeout(() => handleCloseDropdownMenu(), 100); // to close drop down menu with small delay
		}, [handleCloseDropdownMenu, onFilterClick, selectedFilter]);

		return (
			<div className={styles.container}>
				<div
					className={styles.selectedFilterContainer}
					ref={selectedFilterRef}
					onClick={onToggleDropdownMenu}
				>
					<p className={styles.filterTitle}>{selectedFilter || filterTitle}</p>
					{showDropdownMenu ? <CloseArrowIcon /> : <OpenArrowIcon />}
				</div>
				<DropdownMenu
					show={showDropdownMenu}
					filters={filters}
					selectedFilter={selectedFilter}
					onFilterClick={handleFilterClick}
					onRemoveFilterClick={handleRemoveFilterClick}
					onClickOutside={handleCloseDropdownMenu}
				/>
			</div>
		);
	}
);
