import {
	axiosGetRequest,
	axiosPostRequest,
	axiosPatchRequest,
	getRegisterRoute,
	getProfileRoute,
} from '../api';
import { ProfileDto, ProfileResponse, RegisterDto } from './dtos';

export const registerProfileCall = (data: RegisterDto) => {
	return axiosPostRequest<RegisterDto, void>(`${getRegisterRoute()}`, data, true);
};

export const fetchProfileCall = () => {
	return axiosGetRequest<ProfileResponse>(`${getProfileRoute()}`);
};

export const updateProfileCall = (data: ProfileDto) => {
	return axiosPatchRequest<ProfileDto, ProfileResponse>(`${getProfileRoute()}`, data);
};
