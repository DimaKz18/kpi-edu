import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { protectedQuery } from 'service/api';
import { Media } from './models';

// export const mediaService = createApi({
// 	reducerPath: 'mediaService',
// 	baseQuery: protectedQuery,
// 	endpoints: (build) => ({
// 		fetchMedia: build.query<Media[], string>({
// 			query: (search: string) => ({
// 				url: '/profile',
// 			}),
// 		}),
// 	}),
// });

export const mediaService = createApi({
	reducerPath: 'mediaService',
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com',
	}),
	endpoints: (build) => ({
		fetchMedias: build.query<Media[], string>({
			query: (search: string) => ({
				url: '/search/users',
				params: {
					q: search,
					per_page: 10,
				},
			}),
			transformResponse: (response: any) => response.items,
		}),
	}),
});

export const { useFetchMediasQuery, useLazyFetchMediasQuery } = mediaService;

