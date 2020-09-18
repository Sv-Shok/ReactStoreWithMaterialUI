import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_PRICE, PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    SORT_PRODUCTS
} from "../type";

export const productsReducer = (state = {}, action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload};
        case FILTER_PRODUCTS_BY_PRICE:
            return {
               ...state,
                filteredItems: action.payload.items,
            };
        case SORT_PRODUCTS:
            return {
                ...state,
                filteredItems: action.payload.items,
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = {product:{}}, action)=>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};