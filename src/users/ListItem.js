import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
`
export default function ListItem({ children }) {
  return (
    <Item>{children}</Item>
  )
}