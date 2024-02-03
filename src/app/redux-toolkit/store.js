import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/slices/counterSlice'
import counterReducerA from '../redux-toolkit/slices/counterSliceA'

const reduxStore = configureStore({
    reducer: {
        counter: counterReducer,
        counterA: counterReducerA,
    },
});

export default reduxStore;

// ()