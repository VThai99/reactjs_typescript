import  countReducer  from './reducers/countReducer';
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
        count: countReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch