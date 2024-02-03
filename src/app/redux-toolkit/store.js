import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/slices/counterSlice'

const reduxStore = configureStore({
    reducer: {
        counter: counterReducer
    },
});

export default reduxStore;

// ()