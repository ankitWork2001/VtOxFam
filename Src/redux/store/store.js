
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authScreen/authScreens';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
