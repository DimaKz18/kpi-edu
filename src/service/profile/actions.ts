import { createAppAsyncThunk } from '../../store/extensions';
import { ProfileDto, RegisterDto } from './dtos';
import { fetchProfileCall, registerProfileCall, updateProfileCall } from './service';

export const registerProfile = createAppAsyncThunk(
	'profile/registerProfile',
	(data: RegisterDto) => {
		return registerProfileCall(data);
	}
);

export const fetchProfile = createAppAsyncThunk('profile/getProfile', () => {
	return fetchProfileCall();
});

export const updateProfile = createAppAsyncThunk(
	'profile/updateProfile',
	async (data: ProfileDto) => {
		return updateProfileCall(data);
	}
);
