import { Media } from '../models';

export type MediasResponse = {
	result: Media[];
	success: boolean;
};

export type MediaResponse = {
	result: Media;
	success: boolean;
};
