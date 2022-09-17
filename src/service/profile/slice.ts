import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import { fetchProfile, logout } from './actions';
import { Profile } from './models';

export type ProfileState = {
	profile?: Profile;
	loadingProfile: boolean;
	profileError?: ErrorResponse;
};

const initialState: ProfileState = {
	profile: undefined,
	loadingProfile: false,
	profileError: undefined,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<Profile>) => {
			state.profile = action.payload;
		},
		setLoadingProfile: (state, action: PayloadAction<boolean>) => {
			state.loadingProfile = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.profile = action.payload;
				state.loadingProfile = false;
			})
			.addCase(fetchProfile.pending, (state) => {
				state.loadingProfile = true;
				state.profileError = undefined;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.loadingProfile = false;
				state.profileError = action.payload;
			})

			.addCase(logout.fulfilled, (state) => {
				state.profile = undefined;
				state.loadingProfile = false;
				localStorage.removeItem('token');
			})
			.addCase(logout.pending, (state) => {
				state.loadingProfile = true;
				state.profileError = undefined;
			})
			.addCase(logout.rejected, (state, action) => {
				state.loadingProfile = false;
				state.profileError = action.payload;
			});
	},
});

export const { setProfile, setLoadingProfile } = profileSlice.actions;

export default profileSlice.reducer;
