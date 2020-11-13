import React, { useState } from 'react'
import Switch from './Switch';
import styled from 'styled-components';
import { ACTIONS } from './reducer';
import { withDispatch } from './DispatchContext';

const Wrapper = styled.div`
`

const Row = styled.div``
const Label = styled.label``

const FiterItem = ({ text, on, onChange }) => {
  return (
    <Row>
      <Label>
        {text}
      </Label>
      <Switch
        on={on}
        onChange={onChange}
      />
    </Row>
  )
}

function FilterPanel({
  filters,
  dispatch
}) {
  return (
    <Wrapper>
      {filters.map(item => (
        <FiterItem
          key={item.id}
          text={item.text}
          on={item.selected}
          onChange={
            () =>
              dispatch({
                type: ACTIONS.FILTER_TOGGLED,
                payload: item.id
              })
          }
        />
      ))}


    </Wrapper>
  )
}

export default withDispatch(FilterPanel);
