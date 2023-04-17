import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { profileReducer } from 'service/profile/slice';
import { appReducer } from 'service/app/slice';

const combinedReducer = combineReducers({
	app: appReducer,
	profile: profileReducer,
});

export const store = configureStore({
	reducer: combinedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
