import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const getAppState = (state: RootState) => state.app;

export const selectAppLanguage = createSelector(
	[getAppState],
	(appState) => appState.appLanguage
);
