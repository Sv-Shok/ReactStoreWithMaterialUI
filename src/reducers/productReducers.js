import {FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS} from "../type";

export const productsReducer = (state = {}, action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload};
        default:
            return state;
    }
};
