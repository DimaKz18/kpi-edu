import axios, { AxiosRequestConfig } from 'axios';

export const $publicRoute = axios.create({
	baseURL: `http://194.233.171.77/api`,
});

export const $protectedRoute = axios.create({
	baseURL: `http://194.233.171.77/api`,
});

$protectedRoute.interceptors.request.use((config: AxiosRequestConfig) => {
	if (!config.headers) return;
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});
