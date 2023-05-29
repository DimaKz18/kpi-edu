import { createApi } from '@reduxjs/toolkit/query/react';
import { protectedQuery } from 'service/api';
import { MediasDto, MediasResponse, MediaResponse } from './dtos';
import { Media } from './models';

export const mediaService = createApi({
	reducerPath: 'mediaService',
	refetchOnFocus: true,
	baseQuery: protectedQuery,
	tagTypes: ['Medias', 'Media', 'Saved medias'],
	endpoints: (build) => ({
		fetchMedias: build.query<Media[], MediasDto>({
			query: (params: MediasDto) => ({
				url: '/media',
				params,
			}),
			transformResponse: (response: MediasResponse) => response.result,
			providesTags: ['Medias'],
		}),
		fetchMedia: build.query<Media, string>({
			query: (mediaId: string) => ({
				url: `/media/${mediaId}`,
			}),
			transformResponse: (response: MediaResponse) => response.result,
			providesTags: ['Media'],
		}),
		fetchSavedMedias: build.query<Media[], void>({
			query: () => ({
				url: '/media/show/subscriptions',
			}),
			transformResponse: (response: MediasResponse) => response.result,
			providesTags: ['Saved medias'],
		}),
		subscribeOnMedia: build.mutation<void, string>({
			query: (mediaId: string) => ({
				url: `/media/subscribe/${mediaId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Saved medias'],
		}),
		unsubscribeFromMedia: build.mutation<void, string>({
			query: (mediaId: string) => ({
				url: `/media/unsubscribe/${mediaId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Saved medias'],
		}),
	}),
});

export const {
	useFetchMediasQuery,
	useLazyFetchMediasQuery,
	useFetchMediaQuery,
	useFetchSavedMediasQuery,
	useSubscribeOnMediaMutation,
	useUnsubscribeFromMediaMutation,
} = mediaService;
