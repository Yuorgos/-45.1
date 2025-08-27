import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const Counter = () => {
  const value = useSelector((state) => state.counter.value); // <- state.counter має існувати
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;