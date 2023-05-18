import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { profileReducer } from 'service/profile/slice';
import { appReducer } from 'service/app/slice';
import { mediaService } from 'service/media';

const combinedReducer = combineReducers({
	app: appReducer,
	profile: profileReducer,
	[mediaService.reducerPath]: mediaService.reducer,
});

export const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(mediaService.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
