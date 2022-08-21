import { createAppAsyncThunk } from '../../store/extensions';
import { LoginDTO } from './dtos';
import { loginCall, logoutCall } from './service';

export const login = createAppAsyncThunk('profile/login', (loginData: LoginDTO) => {
	return loginCall(loginData);
});

export const logout = createAppAsyncThunk('profile/logout', () => {
	return logoutCall();
});
