import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../api';
import { User } from './models';
import { login, logout } from './actions';

export type ProfileState = {
	user?: User;
	loadingUser: boolean;
	userError?: ErrorResponse;
};

const initialState: ProfileState = {
	user: undefined,
	loadingUser: false,
	userError: undefined,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				console.log(action.payload);
				// state.user = action.payload;
				// state.loadingUser = false;
				// TODO
				// localStorage.setItem('token', action.payload)
			})
			.addCase(login.pending, (state) => {
				state.loadingUser = true;
				state.userError = undefined;
			})
			.addCase(login.rejected, (state, action) => {
				state.user = undefined;
				state.loadingUser = false;
				state.userError = action.payload;
			})

			.addCase(logout.fulfilled, (state) => {
				state.user = undefined;
				state.loadingUser = false;
				localStorage.removeItem('token');
			})
			.addCase(logout.pending, (state) => {
				state.loadingUser = true;
				state.userError = undefined;
			})
			.addCase(logout.rejected, (state, action) => {
				state.loadingUser = false;
				state.userError = action.payload;
			});
	},
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
