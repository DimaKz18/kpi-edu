import { DropdownFilter } from 'common/components/DropdownFilter';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaFilterKey } from '../../types';
import {
	SPORT_SPECIALIZATION_FILTER,
	POLITICS_SPECIALIZATION_FILTER,
	CULTURE_SPECIALIZATION_FILTER,
	GENERAL_SPECIALIZATION_FILTER,
} from './helpers';
import styles from './styles.module.scss';

type Props = {
	selectedSpecializationFilter: string;
	selectedTypeFilter: string;
	selectedRegionFilter: string;
	selectedRateFilter: number;
	onMediaFilterClick: (filterKey: MediaFilterKey, value: string) => void;
};

export const Filters = memo(
	({
		selectedSpecializationFilter,
		selectedTypeFilter,
		selectedRegionFilter,
		selectedRateFilter,
		onMediaFilterClick,
	}: Props) => {
		const { t } = useTranslation();

		const specializationFilters = useMemo(() => {
			return [
				{
					title: t('media_sport_specialization_filter_title'),
					value: SPORT_SPECIALIZATION_FILTER,
				},
				{
					title: t('media_politics_specialization_filter_title'),
					value: POLITICS_SPECIALIZATION_FILTER,
				},
				{
					title: t('media_culture_specialization_filter_title'),
					value: CULTURE_SPECIALIZATION_FILTER,
				},
				{
					title: t('media_general_specialization_filter_title'),
					value: GENERAL_SPECIALIZATION_FILTER,
				},
			];
		}, [t]);

		const handleSpecializationFilterClick = useCallback(
			(filter: string) => {
				onMediaFilterClick('specialization', filter);
			},
			[onMediaFilterClick]
		);

		return (
			<div className={styles.container}>
				<DropdownFilter
					filters={specializationFilters}
					selectedFilter={selectedSpecializationFilter}
					filterTitle={t('media_specialization_filter_title')}
					onFilterClick={handleSpecializationFilterClick}
				/>
			</div>
		);
	}
);
