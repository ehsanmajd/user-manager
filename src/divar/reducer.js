const INIT_STATE = {
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

export function reducer(state = INIT_STATE, action) {
  return (HANDLERS[action.type] ||
    (() => state))(state, action.payload)
}

export const ACTIONS = {
  FILTER_TOGGLED: 'FILTER_TOGGLED',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  DELETE_FILTER: 'DELETE_FILTER',
  PRODUCTS_LOADED: 'PRODUCTS_LOADED',
}

const HANDLERS = {
  [ACTIONS.FILTER_TOGGLED]: handleFilterToggled,
  [ACTIONS.CLEAR_FILTERS]: handleClearFilters,
  [ACTIONS.DELETE_FILTER]: handleDeleteFilter,
  [ACTIONS.PRODUCTS_LOADED]: handleProductsLoaded,

}


function handleFilterToggled(state, payload) {
  const index = state.filters.findIndex(x => x.id === payload);
  if (index !== -1) {
    const filters = [...state.filters];
    filters.splice(
      index,
      1,
      {
        ...filters[index],
        selected: !filters[index].selected
      }
    );
    return {
      ...state,
      filters: filters,
      loading: true
    }
  }
  return state;
}

function handleClearFilters(state) {
  return {
    ...state,
    filters: state.filters.map(item => ({ ...item, selected: false })),
    loading: true
  };
}

function handleDeleteFilter(state, payload) {
  const index = state.filters.findIndex(x => x.id === payload);
  if (index !== -1) {
    const filters = [...state.filters];
    filters.splice(
      index,
      1,
      {
        ...filters[index],
        selected: false
      }
    );
    return {
      ...state,
      filters: filters,
      loading: true
    }
  }
  return state;
}

function handleProductsLoaded(state, payload) {
  return {
    ...state,
    products: payload,
    loading: false
  }
}
