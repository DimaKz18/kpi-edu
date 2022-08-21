import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from '../service/profile/slice';

const combinedReducer = combineReducers({
	profile: profileReducer,
});

export const store = configureStore({
	reducer: combinedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
