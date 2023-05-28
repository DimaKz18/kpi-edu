import { createApi } from '@reduxjs/toolkit/query/react';
import { protectedQuery } from 'service/api';
import { MediasDto, MediasResponse } from './dtos';
import { Media } from './models';

export const mediaService = createApi({
	reducerPath: 'mediaService',
	refetchOnFocus: true,
	baseQuery: protectedQuery,
	endpoints: (build) => ({
		fetchMedias: build.query<Media[], MediasDto>({
			query: (params: MediasDto) => {
				return {
					url: '/media',
					params,
				};
			},
			transformResponse: (response: MediasResponse) => response.result,
		}),
	}),
});

export const { useFetchMediasQuery, useLazyFetchMediasQuery } = mediaService;
