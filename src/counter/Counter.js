import React, { useCallback } from 'react'
import { useDispatch, useCounterState } from './CounterContext';


export default function Counter() {
  const dispatch = useDispatch();
  const value = useCounterState();

  const handleInc = useCallback(
    () => {
      dispatch({
        type: 'INC'
      })
    },
    [dispatch]
  )

  // function handleInc() {
  //   dispatch({
  //     type: 'INC'
  //   })
  // }

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