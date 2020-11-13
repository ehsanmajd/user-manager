import React from 'react'
import styled from 'styled-components';
import Token from './Token';
import { ACTIONS } from './reducer';
import { DispatchContext, withDispatch } from './DispatchContext';

const Wrapper = styled.div`
`
const Label = styled.label``
const Button = styled.button``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const TokenWrapper = styled.div`
  display: flex;
`

function Filter({ filterItems = [] }) {
  const dispatch = React.useContext(DispatchContext)
  return (
    <Wrapper>
      <Row>
        <Label>Filters</Label>
        <Button onClick={() =>
          dispatch({ type: ACTIONS.CLEAR_FILTERS })}>RemoveAll</Button>
      </Row>
      <TokenWrapper>
        {filterItems.map(item =>
          <Token
            text={item.text}
            key={item.id}
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_FILTER, payload: item.id })}
          />)}
      </TokenWrapper>
    </Wrapper>
  )
}

export default Filter;

// export default function (props) {
//   return (
//     <DispatchContext.Consumer>
//       {dispatch => <Filter {...props} dispatch={dispatch} />}
//     </DispatchContext.Consumer>
//   )
// }