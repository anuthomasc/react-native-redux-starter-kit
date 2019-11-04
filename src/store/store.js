/**
 * Application Redux Store.
 * Offline data persistence is enabled with the help of redux-persist
 */
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from "../reducers/index";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, AppReducer);
function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(persistedReducer, initialState, enhancer);
}
export const store = configureStore({});
export const persistor = persistStore(store);
