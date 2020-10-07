import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
    productDetailsReducer,
    productsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const initialState = {};
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
    }),
    initialState,
    composeEnchancer(applyMiddleware(thunk))
);

export default store;