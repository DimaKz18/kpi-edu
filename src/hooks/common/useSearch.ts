import { useCallback, useState } from 'react';

export const useSearch = () => {
	const [search, setSearch] = useState('');

	const handleSearchChange = useCallback((value: string) => {
		setSearch(value);
	}, []);

	const clearSearchValue = useCallback(() => {
		setSearch('');
	}, []);

	return {
		search,
		handleSearchChange,
		clearSearchValue,
	};
};
