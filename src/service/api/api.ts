import axios, { AxiosRequestConfig } from 'axios';

export const $publicRoute = axios.create({
	baseURL: `https://europe-west1-kpiedu-1fb35.cloudfunctions.net/api`,
	headers: {
		'Access-Control-Allow-Origin': 'kpiedu-1fb35.web.app',
	},
});

export const $protectedRoute = axios.create({
	baseURL: `https://europe-west1-kpiedu-1fb35.cloudfunctions.net/api`,
});

$protectedRoute.interceptors.request.use((config: AxiosRequestConfig) => {
	if (!config.headers) return;
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});
