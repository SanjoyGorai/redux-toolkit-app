import { combineSlices } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import counterReducerA from './counterSliceA'

export const rootReducer = combineSlices({
    counter: counterReducer,
    counterA: counterReducerA
});
