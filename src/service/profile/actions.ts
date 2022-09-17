import { createAppAsyncThunk } from '../../store/extensions';
import { fetchProfileCall, logoutCall } from './service';

export const fetchProfile = createAppAsyncThunk('profile/getProfile', () => {
	return fetchProfileCall();
});

export const logout = createAppAsyncThunk('profile/logout', () => {
	return logoutCall();
});
