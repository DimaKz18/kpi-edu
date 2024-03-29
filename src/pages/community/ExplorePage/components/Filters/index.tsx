import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';
import { MediaFilterKey } from '../../types';
import {
	POLITICS_SPECIALIZATION_FILTER,
	CULTURE_SPECIALIZATION_FILTER,
	GENERAL_SPECIALIZATION_FILTER,
	AGENCY_TYPE_FILTER,
	NEWSPAPER_TYPE_FILTER,
	ONLINE_TYPE_FILTER,
	KYIV_REGION_FILTER,
	LVIV_REGION_FILTER,
	CHERKASY_REGION_FILTER,
} from './helpers';
import { DropdownFilter } from 'common/components/DropdownFilter';
import { RateFilter } from 'common/components/RateFilter';
import styles from './styles.module.scss';

type Props = {
	selectedSpecializationFilter: MediaSpecialization | null;
	selectedTypeFilter: MediaType | null;
	selectedRegionFilter: MediaRegion | null;
	selectedRateFilter: number;
	onMediaFilterClick: (filterKey: MediaFilterKey, value: string | number) => void;
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

		const typeFilters = useMemo(() => {
			return [
				{
					title: t('media_agency_type_filter_title'),
					value: AGENCY_TYPE_FILTER,
				},
				{
					title: t('media_newspaper_type_filter_title'),
					value: NEWSPAPER_TYPE_FILTER,
				},
				{
					title: t('media_online_specialization_filter_title'),
					value: ONLINE_TYPE_FILTER,
				},
			];
		}, [t]);

		const regionFilters = useMemo(() => {
			return [
				{
					title: t('media_kyiv_region_filter_title'),
					value: KYIV_REGION_FILTER,
				},
				{
					title: t('media_lviv_region_filter_title'),
					value: LVIV_REGION_FILTER,
				},
				{
					title: t('media_cherkasy_region_filter_title'),
					value: CHERKASY_REGION_FILTER,
				},
			];
		}, [t]);

		const handleSpecializationFilterClick = useCallback(
			(filter?: string) => {
				onMediaFilterClick('specialization', filter || '');
			},
			[onMediaFilterClick]
		);

		const handleTypeFilterClick = useCallback(
			(filter?: string) => {
				onMediaFilterClick('type', filter || '');
			},
			[onMediaFilterClick]
		);

		const handleRegionFilterClick = useCallback(
			(filter?: string) => {
				onMediaFilterClick('region', filter || '');
			},
			[onMediaFilterClick]
		);

		const handleRateFilterClick = useCallback(
			(filter: number) => {
				onMediaFilterClick('rate', filter);
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
				<DropdownFilter
					filters={typeFilters}
					selectedFilter={selectedTypeFilter}
					filterTitle={t('media_type_filter_title')}
					onFilterClick={handleTypeFilterClick}
				/>
				<DropdownFilter
					filters={regionFilters}
					selectedFilter={selectedRegionFilter}
					filterTitle={t('media_region_filter_title')}
					onFilterClick={handleRegionFilterClick}
				/>
				<RateFilter
					selectedFilter={selectedRateFilter}
					onFilterClick={handleRateFilterClick}
				/>
			</div>
		);
	}
);
