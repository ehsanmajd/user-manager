import { getData } from './server';
import { ACTIONS } from './reducer'
export function filterData(selectedFilters) {
  return (dispatch, getState) => {
    getData(selectedFilters)
      .then(data => {
        dispatch({ type: ACTIONS.PRODUCTS_LOADED, payload: data })
      })
  }
}