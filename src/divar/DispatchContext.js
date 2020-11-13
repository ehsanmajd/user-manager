import { createContext } from 'react';

export const DispatchContext = createContext(null);

export function withDispatch(Component) {
  return props => {
    return (
      <DispatchContext.Consumer>
        {dispatch => <Component {...props} dispatch={dispatch} />}
      </DispatchContext.Consumer>
    )
  }
}