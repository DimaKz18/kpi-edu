import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const getProfileState = (state: RootState) => state.profile;

export const selectProfile = createSelector(
	[getProfileState],
	(profileState) => profileState.profile
);

export const selectLoadingProfile = createSelector(
	[getProfileState],
	(profileState) => profileState.loadingProfile
);

export const selectProfileError = createSelector(
	[getProfileState],
	(profileState) => profileState.profileError
);

export const selectProfileRegistered = createSelector(
	[getProfileState],
	(profileState) => profileState.profileRegistered
);

export const selectLoadingUpdatedProfile = createSelector(
	[getProfileState],
	(profileState) => profileState.loadingUpdatedProfile
);

export const selectLoadingUpdatedPassword = createSelector(
	[getProfileState],
	(profileState) => profileState.loadingUpdatedPassword
);

export const selectPasswordUpdated = createSelector(
	[getProfileState],
	(profileState) => profileState.passwordUpdated
);

export const selectLoadingDeleteProfile = createSelector(
	[getProfileState],
	(profileState) => profileState.loadingDeleteProfile
);
