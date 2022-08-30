import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileState = {
	appLanguage: string;
};

const initialState: ProfileState = {
	appLanguage: 'en',
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppLanguage: (state, action: PayloadAction<string>) => {
			state.appLanguage = action.payload;
		},
	},
});

export const { setAppLanguage } = appSlice.actions;

export default appSlice.reducer;
