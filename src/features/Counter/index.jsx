import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter); //De lay gia tri mac dinh trong counterSlice *initialState* // counter duoc khai bao trong store

  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    // const action = decrease(); //action creator
    dispatch(decrease());
  };
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>increase</button>
        <button onClick={handleDecreaseClick}>increase</button>
      </div>
    </div>
  );
}

export default CounterFeature;
