import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
`
export default function List({ children }) {
  return (
    <ListWrapper>{children}</ListWrapper>
  )
}