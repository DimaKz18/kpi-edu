import { memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useOnClickOutside } from 'hooks';
import { FilterType } from '../../types';
import { DropdownMenuItem } from '../DropdownMenuItem';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
	filters: FilterType[];
	selectedFilter: string;
	onFilterClick: (filter: string) => void;
	onClickOutside: (event: Event) => void;
};

export const DropdownMenu = memo(
	({ show, filters, selectedFilter, onFilterClick, onClickOutside }: Props) => {
		const containerRef = useRef<HTMLDivElement | null>(null);

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
			</motion.div>
		);
	}
);
