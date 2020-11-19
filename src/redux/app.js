import React, { useReducer } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import CounterInRedux from './CounterInRedux'


function reducer(state = 0, action) {
  if (action.type === 'INC') {
    return state + 1
  }
  else if (action.type === 'DEC') {
    return state - 1
  }
  return state;
}

const store = createStore(reducer);


export default function App() {

  return (
    <Provider store={store}>
      <CounterInRedux />
    </Provider>
  )
}
