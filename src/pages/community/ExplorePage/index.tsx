import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchMediasQuery } from 'service/media';
import { MediaFilters, MediaFilterKey } from './types';
import { useDebounceValue, useSearch } from 'hooks';
import { getMediasDto } from './utils';
import { NavigationLayout } from 'layout/NavigationLayout';
import { SearchInput } from 'common/components/SearchInput';
import { Filters } from './components/Filters';
import { MediaList } from './components/MediaList';
import styles from './styles.module.scss';

export const ExplorePage = () => {
	const [mediaFilters, setMediaFilters] = useState<MediaFilters>({
		specialization: null,
		type: null,
		region: null,
		rate: 0,
	});

	const navigate = useNavigate();
	const { search, handleSearchChange } = useSearch();
	const debouncedSearch = useDebounceValue(search.trim().toLocaleLowerCase(), 300);

	const mediasDto = getMediasDto(debouncedSearch, mediaFilters);

	const { data: medias, isFetching: loadingMedias } = useFetchMediasQuery(mediasDto, {
		refetchOnFocus: true,
	});

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

	const handleMediaClick = useCallback(
		(mediaId: string) => {
			navigate(`/media/${mediaId}`);
		},
		[navigate]
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
				<MediaList
					medias={medias || []}
					loadingMedias={loadingMedias}
					onMediaClick={handleMediaClick}
				/>
			</div>
		</NavigationLayout>
	);
};
