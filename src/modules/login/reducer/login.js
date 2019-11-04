/**
 * Login reducer component
 */

const initialState = {
  authResult: {}
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, authResult: action.payload };
    case 'USER_LOGOUT':
      return { ...state, authResult: {} };
    default:
      return state;
  }
}
