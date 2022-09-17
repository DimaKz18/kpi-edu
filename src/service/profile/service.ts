import {
	axiosPostRequest,
	getLogoutRoute,
	axiosGetRequest,
	getProfileRoute,
} from '../api';
import { ProfileResponse } from './dtos';

export const fetchProfileCall = () => {
	return axiosGetRequest<ProfileResponse>(`${getProfileRoute()}`);
};

export const logoutCall = () => {
	return axiosPostRequest(`${getLogoutRoute()}`);
};
