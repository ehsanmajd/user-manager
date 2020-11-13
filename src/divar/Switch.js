import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
  border: solid 1px #ccc;
  border-radius: 50px;
  background-color: ${props => props.on ? 'red': 'rgba(0,0,0,.24)'};
  justify-content: ${props => props.on ? 'flex-start': 'flex-end'};
  cursor: pointer;
`

const Circle = styled.div`
  width: 40px;
  border-radius: 50%;
  background-color: white;
`

export default function Switch({ on, onChange }) {
  return (
    <Wrapper on={on} onClick={onChange}>
      <Circle />
    </Wrapper>
  )
}
