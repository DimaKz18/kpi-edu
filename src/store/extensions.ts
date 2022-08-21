import {
	AsyncThunk,
	AsyncThunkPayloadCreator,
	createAsyncThunk,
	Dispatch,
} from '@reduxjs/toolkit';
import { ErrorResponse } from '../service/api';

type ThunkAPIConfigs = {
	state?: unknown;
	dispatch?: Dispatch;
	rejectValue: ErrorResponse;
};

export const createAppAsyncThunk = <Returned, ThunkArg = void>(
	type: string,
	thunk: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkAPIConfigs>
): AsyncThunk<Returned, ThunkArg, ThunkAPIConfigs> => {
	return createAsyncThunk<Returned, ThunkArg, ThunkAPIConfigs>(
		type,
		async (arg, thunkAPI) => {
			try {
				return await thunk(arg, thunkAPI);
			} catch (error: any) {
				const errorResponse: ErrorResponse = {
					data: error.data,
					status: error.status,
					statusText: error.statusText,
				};
				return thunkAPI.rejectWithValue(errorResponse);
			}
		}
	);
};
