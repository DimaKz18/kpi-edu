import { axiosGetRequest, getProfileRoute } from '../api';
import { ProfileResponse } from './dtos';

export const fetchProfileCall = () => {
	return axiosGetRequest<ProfileResponse>(`${getProfileRoute()}`);
};
