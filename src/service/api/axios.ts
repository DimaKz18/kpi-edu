import { $publicRoute, $protectedRoute, ErrorResponse, PaginatedResponse } from '.';
import { HttpStatusCode } from './thunkActionTypes';

const getErrorResponse = (error: any): ErrorResponse => {
	return error.response
		? error.response
		: {
				status: HttpStatusCode.network_error,
				statusText: 'Network Error',
				data: error.message,
		  };
};

/**
 * AXIOS Get request
 * - url: the relative endpoint url e.g category/getCategories
 * - publicRequest: optional parameter. It should be used only for endpoints that work without authorization (access token )
 */
export const axiosGetRequest = async <T>(
	url: string,
	publicRequest?: boolean
): Promise<T> => {
	const axiosInstance = publicRequest ? $publicRoute : $protectedRoute;

	return new Promise((resolve, reject) => {
		axiosInstance
			.get(url)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(getErrorResponse(error));
			});
	});
};

/**
 * AXIOS Get paginated request
 * - url: the relative endpoint url e.g category/getCategories
 * - page: pagination parameter. If it is present in response, the request has more records.
 * - publicRequest: optional parameter. It should be used only for endpoints that work without authorization (access token )
 */
export const axiosGetPaginatedRequest = async <T>(
	url: string,
	page: number = 1,
	publicRequest?: boolean
): Promise<PaginatedResponse<T>> => {
	const axiosInstance = publicRequest ? $publicRoute : $protectedRoute;

	return new Promise((resolve, reject) => {
		axiosInstance
			.get(`${url}?page=${page}`)
			.then((response) => {
				const paginatedResponse: PaginatedResponse<T> = {
					data: response.data,
					// TODO add PaginatedReposense type
					// meta: response.meta,
				};
				resolve(paginatedResponse);
			})
			.catch((error) => {
				reject(getErrorResponse(error));
			});
	});
};

/**
 * AXIOS POST request
 * - url: the relative endpoint url e.g category/getCategories
 * - data: the body object
 * - publicRequest: optional parameter. It should pe used only for endoints that work without authorization (access token )
 */
export const axiosPostRequest = async <T1, T2>(
	url: string,
	data?: T1,
	publicRequest?: boolean
): Promise<T2> => {
	const axiosInstance = publicRequest ? $publicRoute : $protectedRoute;

	return new Promise((resolve, reject) => {
		axiosInstance
			.post(url, data)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(getErrorResponse(error));
			});
	});
};

/**
 * AXIOS DELETE request
 * - url: the relative endpoint url e.g category/getCategories
 * - data: the body object, may be optional
 * - publicRequest: optional parameter. It should pe used only for endoints that work without authorization (access token )
 */
export const axiosDeleteRequest = async <T1, T2>(
	url: string,
	data?: T1,
	publicRequest?: boolean
): Promise<T2> => {
	const axiosInstance = publicRequest ? $publicRoute : $protectedRoute;

	return new Promise((resolve, reject) => {
		axiosInstance
			.delete(url, data)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(getErrorResponse(error));
			});
	});
};

/**
 * AXIOS PUT request
 * - url: the relative endpoint url e.g category/getCategories
 * - data: the body object, may be optional
 * - publicRequest: optional parameter. It should pe used only for endoints that work without authorization (access token )
 */
export const axiosPutRequest = async <T1, T2>(
	url: string,
	data?: T1,
	publicRequest?: boolean
): Promise<T2> => {
	const axiosInstance = publicRequest ? $publicRoute : $protectedRoute;

	return new Promise((resolve, reject) => {
		axiosInstance
			.delete(url, data)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(getErrorResponse(error));
			});
	});
};
