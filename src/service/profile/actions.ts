import { createAppAsyncThunk } from '../../store/extensions';
import { fetchProfileCall } from './service';

export const fetchProfile = createAppAsyncThunk('profile/getProfile', () => {
	return fetchProfileCall();
});
