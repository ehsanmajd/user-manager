import React from 'react'
import { useDispatch, useCounterState } from './CounterContext';

export default function Counter() {
  const dispatch = useDispatch();
  const value = useCounterState();

  function handleInc() {
    dispatch({
      type: 'INC'
    })
  }

  function handleDec() {
    dispatch({
      type: 'DEC'
    })
  }

  return (
    <div>
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
      <label>{value}</label>
    </div>
  )
}

