import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  border: solid 1px #ccc;
  border-radius: 50px;
  margin-left: 5px;
  padding: 0 5px;
  align-items: center;
  color: white;

`

const Label = styled.label`
  padding: 5px;
`
const Button = styled.button`
  /* padding: 5px;
  background-color: transparent;
  border: none;
  outline: none; */
  width: 1.75rem;
  height: 1.625rem;
  cursor: pointer;
  outline: none;
  padding: 0;
  border: none;
  background-color: hsla(0,0%,100%,0);
  font-size: 1rem;
  color: white;

`

export default function Token({ text, onClick }) {
  return (
    <Wrapper>
      <Label>{text}</Label>
      <Button onClick={onClick}>×</Button>
    </Wrapper>
  )
}
