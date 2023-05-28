import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';

export type MediaFilters = {
	specialization: MediaSpecialization | null;
	type: MediaType | null;
	region: MediaRegion | null;
	rate: number;
};

export type MediaFilterKey = keyof MediaFilters;
