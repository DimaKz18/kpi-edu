import { TFunction } from 'react-i18next';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';

export const getMediaSpecializationTitle = (
	specialization: MediaSpecialization,
	t: TFunction
) => {
	switch (specialization) {
		case 'politics':
			return `${t('media_card_specialization_title')} - ${t(
				'media_politics_specialization_filter_title'
			)}`;

		case 'culture':
			return `${t('media_card_specialization_title')} - ${t(
				'media_culture_specialization_filter_title'
			)}`;

		case 'general':
			return `${t('media_card_specialization_title')} - ${t(
				'media_general_specialization_filter_title'
			)}`;

		default:
			break;
	}
};

export const getMediaTypeTitle = (type: MediaType, t: TFunction) => {
	switch (type) {
		case 'agency':
			return `${t('media_card_type_title')} - ${t('media_agency_type_filter_title')}`;

		case 'newspaper':
			return `${t('media_card_type_title')} - ${t('media_newspaper_type_filter_title')}`;

		case 'online':
			return `${t('media_card_type_title')} - ${t(
				'media_online_specialization_filter_title'
			)}`;

		default:
			break;
	}
};

export const getMediaRegionTitle = (region: MediaRegion, t: TFunction) => {
	switch (region) {
		case 'kyiv':
			return `${t('media_card_region_title')} - ${t('media_kyiv_region_filter_title')}`;

		case 'lviv':
			return `${t('media_card_region_title')} - ${t('media_lviv_region_filter_title')}`;

		case 'cherkasy':
			return `${t('media_card_region_title')} - ${t(
				'media_cherkasy_region_filter_title'
			)}`;

		default:
			break;
	}
};
