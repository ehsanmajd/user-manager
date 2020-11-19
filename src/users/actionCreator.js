import { ACTIONS } from './reducer';
import { getUsers } from '../server'

export function loading() {
  return {
    type: ACTIONS.LOADING
  };
}

export function userLoaded(users) {
  return {
    type: ACTIONS.USERS_LOADED,
    payload: users
  }
}

export function searchUsers() {
  return async (dispatch, getState) => {
    const { keyword } = getState();
    dispatch(loading());
    const users = await getUsers(keyword);
    dispatch(userLoaded(users))
  }
}