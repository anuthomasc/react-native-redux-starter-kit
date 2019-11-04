/**
 * Home Screen Reducer
 */
const initialPostState = {
    homeResult: {},
    error: false
};

export default function home(state = initialPostState, action) {
    switch (action.type) {
        case 'HOME_RESULT':
            return { ...state, homeResult: action.payload, error: false };
        case 'HOME_ERROR':
            return { ...state, error: true };
        default:
            return state;
    }
}
