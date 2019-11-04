/**
 * Home Screen API call actions are handled here
 */

import { getHome } from '../../../services/api';

/**
 * get people list over the network and dispatches an action
 * to update the state of the reducer
 */
export function getPeopleList(page) {
  return (dispatch, getState) => {
    return getHome(page).then(response => {
      return response.json();
    }).then(responseJson => {
      dispatch(getHomeSuccess(responseJson));
    })
      .catch(error => {
        dispatch(getHomeError(error))
      });
  }
}

export function getHomeSuccess(responseJson) {
  return ({
    type: 'HOME_RESULT',
    payload: responseJson
  })
}

export function getHomeError(error) {
  console.log(error);
  return ({
    type: 'HOME_ERROR',
  })
}