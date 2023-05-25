import { createAppAsyncThunk } from '../../store/extensions';
import { PasswordDto, ProfileDto, RegisterDto } from './dtos';
import {
	fetchProfileCall,
	registerProfileCall,
	updateProfileCall,
	updatePasswordCall,
} from './service';

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

export const updatePassword = createAppAsyncThunk(
	'profile/updatePassword',
	async (data: PasswordDto) => {
		return updatePasswordCall(data);
	}
);
