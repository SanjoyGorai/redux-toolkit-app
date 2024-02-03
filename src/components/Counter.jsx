import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../app/redux-toolkit/slices/counterSlice';

const Counter = () => {

    const state = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    function handleClick(event) {
        switch (event.target.id) {
            case 'increment':
                dispatch(increment())
                break;

            case 'decrement':
                dispatch(decrement())
                break;
            case 'incrementbyvalue':
                dispatch(incrementByAmount(2))
                break
        }
    }

    return (
        <div>

            <h1 className='font-bold text-blue-600'>Counter Component App</h1>
            <h2 className='font-bold text-2xl m-3 p-2'>Value is : {state}</h2>
            <button className='bg-green-600 m-2' id='increment' onClick={handleClick}>Increment</button>
            <button className='bg-red-600 m-2' id='decrement' onClick={handleClick}>Decrement</button>
            <button className='bg-blue-600 m-2' id='incrementbyvalue' onClick={handleClick}>Increment by Value</button>
        </div>
    )
}

export default Counter