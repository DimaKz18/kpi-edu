import { MediaRegion, MediaSpecialization, MediaType } from '.';

export type Media = {
	id: number;
	url: string;
	title: string;
	description: string;
	specialization: MediaSpecialization;
	type: MediaType;
	region: MediaRegion;
	rate: number;
	subscribed: boolean;
};
