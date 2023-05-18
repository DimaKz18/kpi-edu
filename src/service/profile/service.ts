import {
	axiosGetRequest,
	axiosPostRequest,
	getRegisterRoute,
	getProfileRoute,
} from '../api';
import { ProfileResponse, RegisterDto } from './dtos';

export const registerProfileCall = (data: RegisterDto) => {
	return axiosPostRequest<RegisterDto, void>(`${getRegisterRoute()}`, data, true);
};

export const fetchProfileCall = () => {
	return axiosGetRequest<ProfileResponse>(`${getProfileRoute()}`);
};
