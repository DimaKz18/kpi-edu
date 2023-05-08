import { memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useOnClickOutside } from 'hooks';
import { FilterType } from '../../types';
import { DropdownMenuItem } from '../DropdownMenuItem';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
	filters: FilterType[];
	selectedFilter: string;
	onFilterClick: (filter?: string) => void;
	onRemoveFilterClick: () => void;
	onClickOutside: (event: Event) => void;
};

export const DropdownMenu = memo(
	({
		show,
		filters,
		selectedFilter,
		onFilterClick,
		onRemoveFilterClick,
		onClickOutside,
	}: Props) => {
		const containerRef = useRef<HTMLDivElement | null>(null);

		const { t } = useTranslation();
		useOnClickOutside(containerRef, onClickOutside);

		const animationVariants = {
			initial: {
				height: 0,
				overflow: 'hidden',
				opacity: 0,
			},
			show: {
				height: 'auto',
				overflow: 'auto',
				opacity: 1,
			},
			hide: {
				height: 0,
				overflow: 'hidden',
				transitionEnd: {
					opacity: 0,
				},
			},
		};

		return (
			<motion.div
				initial={'initial'}
				animate={show ? 'show' : 'hide'}
				variants={animationVariants}
				transition={{ duration: 0.3 }}
				className={styles.container}
				ref={containerRef}
			>
				{filters.map((filter) => {
					return (
						<DropdownMenuItem
							key={filter.title}
							title={filter.title}
							selected={filter.value === selectedFilter}
							onFilterClick={() => onFilterClick(filter.value)}
						/>
					);
				})}
				<div className={styles.removeFilterContainer} onClick={onRemoveFilterClick}>
					<p className={styles.removeButtonTitle}>{t('media_remove_filter_title')}</p>
				</div>
			</motion.div>
		);
	}
);
