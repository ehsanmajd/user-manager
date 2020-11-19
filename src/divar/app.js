import React, { useState, useReducer, useEffect } from 'react'
import FilterPanel from './FilterPanel'
import ProductList from './ProductList';
import Switch from './Switch';
import styled from 'styled-components';
import Filter from './Filter';
import { getData } from './server';
import Loading from './Loading';
import { ACTIONS, reducer } from './reducer';
import { reducer2 } from './reducer2';
import { DispatchContext } from './DispatchContext';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk';
import { filterData } from './actionCreators';
import logger from 'redux-logger'


const Wrapper = styled.div`
  display: flex;
`;
const Side = styled.div`
  width: 30%;
`;
const Main = styled.div`
  flex: 1;
`;

const rootReducer = combineReducers({
  main: reducer,
  other: reducer2,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

function App() {
  const dispatch = useDispatch();

  const { filters, loading } = useSelector(state => {
    return {
      filters: state.main.filters,
      loading: state.main.loading
    }
  });

  const selectedFilters = React.useMemo(
    () => filters.filter(x => x.selected),
    [filters]
  );

  useEffect(
    () => {
      dispatch(filterData(selectedFilters))
      // getData(selectedFilters)
      //   .then(data => {
      //     dispatch({ type: ACTIONS.PRODUCTS_LOADED, payload: data })
      //   })
    },
    [selectedFilters]
  )

  return (
    <Wrapper>
      <Side>
        <Filter
          filterItems={selectedFilters}
        />
        <FilterPanel
          filters={filters}
        />
      </Side>
      <Main>
        {!loading && <ProductList
        />}
        {loading && <Loading />}
      </Main>
    </Wrapper>
  )
}


export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const STATE = {
  main: {
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
  },
  other: {
    message: 'Hello !'
  }
}