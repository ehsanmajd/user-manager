export function reducer(state, action) {
  return (HANDLERS[action.type] ||
    (() => state))(state, action.payload)
}

export const ACTIONS = {
  KEYWORD_CHANGE: 'KEYWORD_CHANGE',
  LOADING: 'LOADING',
  USERS_LOADED: 'USERS_LOADED',
}

const HANDLERS = {
  [ACTIONS.USERS_LOADED]: handleUsersLoaded,
  [ACTIONS.LOADING]: handleLoading,
  [ACTIONS.KEYWORD_CHANGE]: handleKeywordChange,
}

function handleKeywordChange(state, payload) {
  return {
    ...state,
    keyword: payload
  }
}

function handleUsersLoaded(state, payload) {
  return {
    ...state,
    users: payload,
    loading: false
  };
}
function handleLoading(state, payload) {
  return {
    ...state,
    loading: true
  }
}