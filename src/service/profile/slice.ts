import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import { registerProfile, fetchProfile } from './actions';
import { Profile } from './models';

export type ProfileState = {
	profile?: Profile;
	loadingProfile: boolean;
	profileError?: ErrorResponse;
	profileRegistered: boolean;
};

const initialState: ProfileState = {
	profile: undefined,
	loadingProfile: true,
	profileError: undefined,
	profileRegistered: false,
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
			});
	},
});

export const { setProfile, setLoadingProfile, setProfileError, setProfileRegistered } =
	profileSlice.actions;
export const profileReducer = profileSlice.reducer;
