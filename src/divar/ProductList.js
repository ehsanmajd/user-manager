import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Warpper = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export default function ProductList({ products = [] }) {
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
