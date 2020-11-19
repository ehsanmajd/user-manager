import React, { createContext } from 'react';

export const DispatchContext = createContext(null);

export function withDispatch(Component) {
  return props => {
    const dispatch = React.useContext(DispatchContext)
    return (
      <Component {...props} dispatch={dispatch} />
      // <DispatchContext.Consumer>
      //   {dispatch => <Component {...props} dispatch={dispatch} />}
      // </DispatchContext.Consumer>
    )
  }
}