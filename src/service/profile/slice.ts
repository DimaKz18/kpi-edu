import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import { fetchProfile } from './actions';
import { Profile } from './models';

export type ProfileState = {
	profile?: Profile;
	loadingProfile: boolean;
	profileError?: ErrorResponse;
};

const initialState: ProfileState = {
	profile: undefined,
	loadingProfile: true,
	profileError: undefined,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<Profile | undefined>) => {
			state.profile = action.payload;
		},
		setLoadingProfile: (state, action: PayloadAction<boolean>) => {
			state.loadingProfile = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.profile = action.payload.result;
				state.loadingProfile = false;
			})
			.addCase(fetchProfile.pending, (state) => {
				state.loadingProfile = true;
				state.profileError = undefined;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.loadingProfile = false;
				state.profileError = action.payload;
			});
	},
});

export const { setProfile, setLoadingProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
