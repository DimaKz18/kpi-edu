import { MediasDto } from 'service/media/dtos';
import { MediaFilters } from '../types';

export const getMediasDto = (search: string, mediaFilters: MediaFilters): MediasDto => {
	const { specialization, type, region, rate } = mediaFilters;
	const mediasDto: MediasDto = {};

	if (search) mediasDto.title = search;
	if (specialization) mediasDto.specialization = specialization;
	if (type) mediasDto.type = type;
	if (region) mediasDto.region = region;
	if (rate) mediasDto.rate = rate;

	return mediasDto;
};
