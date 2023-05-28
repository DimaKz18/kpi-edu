import { createApi } from '@reduxjs/toolkit/query/react';
import { protectedQuery } from 'service/api';
import { MediasDto, MediasResponse, MediaResponse } from './dtos';
import { Media } from './models';

export const mediaService = createApi({
	reducerPath: 'mediaService',
	refetchOnFocus: true,
	baseQuery: protectedQuery,
	endpoints: (build) => ({
		fetchMedias: build.query<Media[], MediasDto>({
			query: (params: MediasDto) => ({
				url: '/media',
				params,
			}),
			transformResponse: (response: MediasResponse) => response.result,
		}),
		fetchMedia: build.query<Media, string>({
			query: (mediaId: string) => ({
				url: `/media/${mediaId}`,
			}),
			transformResponse: (response: MediaResponse) => response.result,
		}),
	}),
});

export const { useFetchMediasQuery, useLazyFetchMediasQuery, useFetchMediaQuery } =
	mediaService;
