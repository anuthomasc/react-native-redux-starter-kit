/**
 * Login Screen Action
 * Simply stores the email and password to the reducer state 
 * and the state is preserved with the help of redux-persist
 */

export function saveUserInfo(email, password) {
  return (dispatch, getState) => {
    return dispatch(saveUserInfoSuccess(email, password))
  }
}

export function logoutUser() {
  return (dispatch, getState) => {
    return dispatch(logoutUserSuccess())
  }
}
export function saveUserInfoSuccess(email, password) {
  return ({
    type: 'USER_LOGIN',
    payload: { 'email': email, 'password': password }
  })
}
export function logoutUserSuccess() {
  return ({
    type: 'USER_LOGOUT'
  })
}