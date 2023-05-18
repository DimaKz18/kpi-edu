import { ChangeEvent, useCallback, useState } from 'react';
import { useFetchMediasQuery } from 'service/media';
import { MediaFilters, MediaFilterKey } from './types';
import { useDebounceValue, useSearch } from 'hooks';
import { NavigationLayout } from 'layout/NavigationLayout';
import { SearchInput } from 'common/components/SearchInput';
import { Filters } from './components/Filters';
import { MediaList } from './components/MediaList';
import styles from './styles.module.scss';

export const ExplorePage = () => {
	const [mediaFilters, setMediaFilters] = useState<MediaFilters>({
		specialization: '',
		type: '',
		region: '',
		rate: 0,
	});

	const { search, handleSearchChange } = useSearch();
	const debouncedSearch = useDebounceValue(search.trim(), 300);

	const { data: medias, isFetching: loadingMedias } = useFetchMediasQuery(
		debouncedSearch,
		{
			skip: debouncedSearch.length < 1,
			refetchOnFocus: true,
		}
	);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			handleSearchChange(e.currentTarget.value);
		},
		[handleSearchChange]
	);

	const handleMediaFilterClick = useCallback(
		(filterKey: MediaFilterKey, value: string | number) => {
			setMediaFilters({
				...mediaFilters,
				[filterKey]: value,
			});
		},
		[mediaFilters]
	);

	return (
		<NavigationLayout>
			<div className={styles.container}>
				<SearchInput value={search} onChange={onChange} />
				<Filters
					selectedSpecializationFilter={mediaFilters.specialization}
					selectedTypeFilter={mediaFilters.type}
					selectedRegionFilter={mediaFilters.region}
					selectedRateFilter={mediaFilters.rate}
					onMediaFilterClick={handleMediaFilterClick}
				/>
				<MediaList medias={medias || []} loadingMedias={loadingMedias} />
			</div>
		</NavigationLayout>
	);
};
