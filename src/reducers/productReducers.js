import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE, SORT_PRODUCTS} from "../type";

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
            console.log(action.payload.items);
            return {
                ...state,
                filteredItems: action.payload.items,
            };
        default:
            return state;
    }
};
