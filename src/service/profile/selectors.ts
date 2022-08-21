import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const getProfileState = (state: RootState) => state.profile;

export const selectUser = createSelector(
	[getProfileState],
	(profileState) => profileState.user
);

export const selectLoadingUser = createSelector(
	[getProfileState],
	(profileState) => profileState.loadingUser
);

export const selectUserError = createSelector(
	[getProfileState],
	(profileState) => profileState.userError
);
