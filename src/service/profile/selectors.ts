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
