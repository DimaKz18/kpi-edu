import { ChangeEvent, useCallback } from 'react';
import { useFetchMediasQuery } from 'service/media';
import { useDebounceValue, useSearch } from 'hooks';
import { NavigationLayout } from 'layout/NavigationLayout';
import { SearchInput } from 'common/components/SearcInput';
import { Filters } from './components/Filters';
import { MediaList } from './components/MediaList';
import styles from './styles.module.scss';

export const ExplorePage = () => {
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

	return (
		<NavigationLayout>
			<div className={styles.container}>
				<SearchInput value={search} onChange={onChange} />
				<Filters />
				<MediaList medias={medias || []} loadingMedias={loadingMedias} />
			</div>
		</NavigationLayout>
	);
};
