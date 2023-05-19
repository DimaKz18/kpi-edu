import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosRequestConfig } from 'axios';

export const $publicRoute = axios.create({
	baseURL: `https://authentication-rkn2ijq6na-ew.a.run.app`,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export const $protectedRoute = axios.create({
	baseURL: `https://europe-west1-kpiedu-1fb35.cloudfunctions.net`,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

$protectedRoute.interceptors.request.use((config: AxiosRequestConfig) => {
	if (!config.headers) return;
	config.headers.Authorization = `${localStorage.getItem('token')}`;
	return config;
});

export const protectedQuery = fetchBaseQuery({
	baseUrl: 'https://europe-west1-kpiedu-1fb35.cloudfunctions.net',
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token');
		if (token) headers.set('authorization', `${token}`);

		return headers;
	},
});
