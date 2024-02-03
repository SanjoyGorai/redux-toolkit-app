import { createSlice, createReducer, createAction } from '@reduxjs/toolkit'


const initialState = { value: 2 }

const counterSliceA = createSlice({
    name: 'counterA',
    initialState,
    reducers: {
        increment(state, action) {
            state.value += 1
        },
        decrement(state, action) {
            state.value -= 1
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },

    }
});

export default counterSliceA.reducer;
export const { increment, decrement, incrementByAmount } = counterSliceA.actions;