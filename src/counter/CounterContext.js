import React, { createContext } from 'react';

export const CounterContext = createContext({
  value: null,
  dispatch: null
});

export function useDispatch() {
  const contextValue = React.useContext(CounterContext);
  return contextValue.dispatch;
}

export function useCounterState() {
  const contextValue = React.useContext(CounterContext);
  return contextValue.value;
}
