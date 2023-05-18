import { TFunction } from 'react-i18next';
import { FIRST_NAME_MAX_LENGTH, LAST_NAME_MAX_LENGTH } from '../helpers';
import { UpdatedProfile, UpdatedProfileErrors, UpdatedProfileKey } from '../types';

const validateFirstName = (
	t: TFunction<'translation', undefined>,
	firstName: string = ''
) => {
	if (firstName && firstName.length <= FIRST_NAME_MAX_LENGTH) return;
	return t('profile_page_updated_profile_first_name_error');
};

const validateLastName = (
	t: TFunction<'translation', undefined>,
	lastName: string = ''
) => {
	if (lastName && lastName.length <= LAST_NAME_MAX_LENGTH) return;
	return t('profile_page_updated_profile_last_name_error');
};

export const validateProfile = (
	profile: UpdatedProfile,
	t: TFunction<'translation', undefined>
) => {
	const errors: UpdatedProfileErrors = {};

	Object.entries(profile).forEach((information) => {
		const title = information[0] as UpdatedProfileKey;

		switch (title) {
			case 'firstName': {
				const error = validateFirstName(t, profile.firstName);
				if (error) errors.firstName = error;
				break;
			}

			case 'lastName': {
				const error = validateLastName(t, profile.lastName);
				if (error) errors.lastName = error;
				break;
			}

			default:
				break;
		}
	});

	return errors;
};
