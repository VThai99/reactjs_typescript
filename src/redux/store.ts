import  userSlice from './reducers/userSlice';
import  countReducer  from './reducers/countReducer';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { userSaga } from './saga/userSaga';
const saga = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        count: countReducer,
        auth: userSlice
    },
    middleware: [saga]
})
saga.run(userSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch