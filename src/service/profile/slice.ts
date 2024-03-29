import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import {
	registerProfile,
	fetchProfile,
	updateProfile,
	updatePassword,
	deleteProfile,
} from './actions';
import { Profile } from './models';

export type ProfileState = {
	profile?: Profile;
	loadingProfile: boolean;
	profileError?: ErrorResponse;
	profileRegistered: boolean;
	loadingUpdatedProfile: boolean;
	passwordUpdated: boolean;
	loadingUpdatedPassword: boolean;
	loadingDeleteProfile: boolean;
};

const initialState: ProfileState = {
	profile: undefined,
	loadingProfile: true,
	profileError: undefined,
	profileRegistered: false,
	loadingUpdatedProfile: false,
	passwordUpdated: false,
	loadingUpdatedPassword: false,
	loadingDeleteProfile: false,
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
		setPasswordUpdated: (state, action: PayloadAction<boolean>) => {
			state.passwordUpdated = action.payload;
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
			})

			.addCase(updatePassword.fulfilled, (state) => {
				state.passwordUpdated = true;
				state.loadingUpdatedPassword = false;
			})
			.addCase(updatePassword.pending, (state) => {
				state.loadingUpdatedPassword = true;
			})
			.addCase(updatePassword.rejected, (state) => {
				state.loadingUpdatedPassword = false;
			})

			.addCase(deleteProfile.fulfilled, (state) => {
				state.passwordUpdated = true;
				state.loadingDeleteProfile = false;
			})
			.addCase(deleteProfile.pending, (state) => {
				state.loadingDeleteProfile = true;
			})
			.addCase(deleteProfile.rejected, (state) => {
				state.loadingDeleteProfile = false;
			});
	},
});

export const {
	setProfile,
	setLoadingProfile,
	setProfileError,
	setProfileRegistered,
	setPasswordUpdated,
} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
