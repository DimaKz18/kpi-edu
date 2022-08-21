import { axiosPostRequest, getLoginRoute, getLogoutRoute } from '../api';
import { LoginDTO } from './dtos';
import { User } from './models';

export const loginCall = (loginData: LoginDTO) => {
	// TODO change axios response type
	return axiosPostRequest<LoginDTO, User>(`${getLoginRoute()}`, loginData, true);
};

export const logoutCall = () => {
	return axiosPostRequest(`${getLogoutRoute()}`);
};
