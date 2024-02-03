import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import counterReducerA from './slices/counterSliceA'
import { rootReducer } from './slices/rootReducer';

const reduxStore = configureStore({
    reducer: {
        // counter: counterReducer,
        // counterA: counterReducerA,
        reducer : rootReducer
    },
});

export default reduxStore;

// ()