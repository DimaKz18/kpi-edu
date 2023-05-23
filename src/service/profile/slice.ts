import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import { registerProfile, fetchProfile, updateProfile } from './actions';
import { Profile } from './models';

export type ProfileState = {
	profile?: Profile;
	loadingProfile: boolean;
	profileError?: ErrorResponse;
	profileRegistered: boolean;
	loadingUpdatedProfile: boolean;
};

const initialState: ProfileState = {
	profile: undefined,
	loadingProfile: true,
	profileError: undefined,
	profileRegistered: false,
	loadingUpdatedProfile: false,
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
		setProfileError: (state, action: PayloadAction<ErrorResponse | undefined>) => {
			state.profileError = action.payload;
		},
		setProfileRegistered: (state, action: PayloadAction<boolean>) => {
			state.profileRegistered = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerProfile.fulfilled, (state) => {
				state.profileRegistered = true;
				state.loadingProfile = false;
			})
			.addCase(registerProfile.rejected, (state, action) => {
				state.loadingProfile = false;
				state.profileError = action.payload;
			})

			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.profile = action.payload.result;
				state.loadingProfile = false;
			})
			.addCase(fetchProfile.pending, (state) => {
				state.loadingProfile = true;
				state.profileError = undefined;
			})
			.addCase(fetchProfile.rejected, (state) => {
				state.loadingProfile = false;
			})

			.addCase(updateProfile.fulfilled, (state, action) => {
				state.profile = action.payload.result;
				state.loadingUpdatedProfile = false;
			})
			.addCase(updateProfile.pending, (state) => {
				state.loadingUpdatedProfile = true;
			})
			.addCase(updateProfile.rejected, (state) => {
				state.loadingUpdatedProfile = false;
			});
	},
});

export const { setProfile, setLoadingProfile, setProfileError, setProfileRegistered } =
	profileSlice.actions;
export const profileReducer = profileSlice.reducer;
