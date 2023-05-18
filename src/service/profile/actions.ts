import { createAppAsyncThunk } from '../../store/extensions';
import { RegisterDto } from './dtos';
import { fetchProfileCall, registerProfileCall } from './service';

export const registerProfile = createAppAsyncThunk(
	'profile/register',
	(data: RegisterDto) => {
		return registerProfileCall(data);
	}
);

export const fetchProfile = createAppAsyncThunk('profile/getProfile', () => {
	return fetchProfileCall();
});
