import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  border: solid 1px #ccc;
  margin: 20px;
`
const Column = styled.div`
  
`
const Title = styled.label`
  
`

const ConditionWrapper = styled.div``

export default function Card({
  image,
  title,
  price,
  location,
  condition,
  chatLocked
}) {
  return (
    <Wrapper>
      
      <Column>
        <Title>{title}</Title>
        <ConditionWrapper>
          <div>{price || 'Tavafogfhi'}</div>
          {condition && <div> Emergency in {location}</div>}

          {!chatLocked && "chattable!"}
        </ConditionWrapper>
      </Column>
      <Column>
        <img  alt='Image' />
      </Column>
    </Wrapper>
  )
}