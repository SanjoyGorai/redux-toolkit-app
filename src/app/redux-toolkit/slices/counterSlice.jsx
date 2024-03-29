import { createSlice, createReducer, createAction } from '@reduxjs/toolkit'


const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
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

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;