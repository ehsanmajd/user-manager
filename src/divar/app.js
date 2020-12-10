import React, { useState, useReducer, useEffect } from 'react'
import FilterPanel from './FilterPanel'
import ProductList from './ProductList';
import Switch from './Switch';
import styled from 'styled-components';
import Filter from './Filter';
import { getData } from './server';
import Loading from './Loading';
import { ACTIONS, reducer } from './reducer';
import { DispatchContext } from './DispatchContext'



const Wrapper = styled.div`
  display: flex;
`;
const Side = styled.div`
  width: 30%;
`;
const Main = styled.div`
  flex: 1;
`;

export default function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      loading: true,
      products: [],
      filters: [
        {
          text: 'Chattable',
          id: '1',
          selected: false
        },
        {
          text: 'withoutPrice',
          id: '2',
          selected: false
        },
        {
          text: 'condition',
          id: '3',
          selected: false
        }
      ]
    }
  )
  const selectedFilters = React.useMemo(
    () => state.filters.filter(x => x.selected),
    [state.filters]
  )

  //const selectedFilters = state.filters.filter(x => x.selected);

  useEffect(
    () => {
      getData(selectedFilters)
        .then(data => {
          dispatch({ type: ACTIONS.PRODUCTS_LOADED, payload: data })
        })
    },
    [selectedFilters]
  )

  console.log(state.filters);

  // const handleChange = useCallback(
  //   function (e) {

  //   },
  //   []
  // )

  return (
    <DispatchContext.Provider value={dispatch}>
      <Wrapper>
        <Side>
          <Filter
            filterItems={selectedFilters}
          />
          <FilterPanel
            filters={state.filters}
          />
        </Side>
        <Main>
          {!state.loading && <ProductList
            products={state.products}
          />}
          {state.loading && <Loading />}
        </Main>
      </Wrapper>
    </DispatchContext.Provider>
  )
}


