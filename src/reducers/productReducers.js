import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE} from "../type";

export const productsReducer = (state = {}, action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload};
        case FILTER_PRODUCTS_BY_PRICE:
            return {
               ...state,
                filteredItems: action.payload.items,
            };
        default:
            return state;
    }
};
