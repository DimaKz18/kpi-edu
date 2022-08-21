export enum HttpStatusCode {
	// succes codes
	no_content = 204,
	// client errors
	bad_request = 400,
	not_authorized = 401,
	payment_required = 402,
	forbidden = 403,
	not_found = 404,
	conflict = 409,
	payload_too_large = 413,
	server_error = 500,
	bad_gateway = 502,
	service_unavailable = 503,
	// custom error
	network_error = 700,
}

export type ErrorResponse = {
	status: HttpStatusCode;
	statusText: string;
	data: string;
};
