import {
	axiosPostRequest,
	getLogoutRoute,
	axiosGetRequest,
	getProfileRoute,
} from '../api';
import { Profile } from './models';

export const fetchProfileCall = () => {
	return axiosGetRequest<Profile>(`${getProfileRoute()}`);
};

export const logoutCall = () => {
	return axiosPostRequest(`${getLogoutRoute()}`);
};
