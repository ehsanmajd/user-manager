export function reducer(state, action) {

  return (HANDLERS[action.type] ||
    (() => state))(state, action.payload)
}

export const ACTIONS = {
  USER_LOADED: 'USER_LOADED',
  RESET_FORM: 'RESET_FORM',
  INPUT_CHANGE: 'INPUT_CHANGE',
}

const HANDLERS = {
  [ACTIONS.USER_LOADED]: handleUserLoaded,
  [ACTIONS.RESET_FORM]: handleResetForm,
  [ACTIONS.INPUT_CHANGE]: handleInputChange,

}


function handleInputChange(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

function handleUserLoaded(state, payload) {
  return {
    ...state,
    name: payload.name,
    username: payload.username,
  };
}
function handleResetForm(state, payload) {
  return {
    name: '',
    username: ''
  }
}