import { MediaRegion, MediaSpecialization, MediaType } from '../models';

export type MediasDto = {
	title?: string;
	specialization?: MediaSpecialization;
	type?: MediaType;
	region?: MediaRegion;
	rate?: number;
};
