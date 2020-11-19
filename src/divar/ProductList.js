import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useSelector } from 'react-redux'

const Warpper = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export default function ProductList() {
  const products = useSelector(state => {
    return state.main.products
  });
  return (
    <Warpper>
      {
        products.map(item => {
          return <Card
            key={item.id}
            title={item.title}
            image={item.image}
            location={item.location}
            condition={item.condition}
            chatLocked={item.chatLocked}
            price={item.price}
          />
        })
      }
    </Warpper>
  )
}
