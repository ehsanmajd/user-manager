import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Warpper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */

`

function useScroll(callback) {
  useEffect(
    () => {
      function handleScroll(event) {
        const listElm = document.body;
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          console.log('aaa');
          callback();
        }
        // if (document.body.scrollHeight ==
        //   document.body.scrollTop +
        //   window.innerHeight) {
        //   alert("Bottom!");
        // }
      }
      document.body.addEventListener('scroll', handleScroll);

      return () => document.body.removeEventListener(handleScroll);
    },
    [callback]
  )
}

export default function ProductList({ products = [] }) {

  useScroll(
    () => {
      console.log('Scrolled!!!!')
    }
  )
  

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
