import React from 'react'
import Counter from './Counter'
import { CounterContext } from './CounterContext'

function reducer(state, action) {
  if (action.type === 'INC') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  else if (action.type === 'DEC') {
    return {
      ...state,
      value: state.value - 1
    }
  }
  return state;
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    value: 0
  })


  return (
    <CounterContext.Provider value={{
      value: state.value,
      dispatch
    }}>
      <Counter />
    </CounterContext.Provider>
  )
}
