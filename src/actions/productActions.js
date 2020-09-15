import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE, SORT_PRODUCTS} from "../type";
import {storeProducts} from "../data";

export const fetchProducts = ()=> async (dispatch)=>{
 const res = await  fetch("/api/products");
 const data = await res.json();
 dispatch({
     type: FETCH_PRODUCTS,
     payload: data,
 })
};

// export const sortProducts = (products, size)=> (dispatch)=>{
//     dispatch({
//         type: SORT_PRODUCTS,
//         payload: {
//
//         }
//     })
// };

export const filterProductsByPrice = (filteredProducts, price)=> (dispatch)=>{
    let [priceMin, priceMax] = price;
    const products = filteredProducts.slice().filter((productItem)=> productItem.price > priceMin && productItem.price < priceMax);
    dispatch({
        type: FILTER_PRODUCTS_BY_PRICE,
        payload: {
            items: products
        }
    })
};

// let [priceMin, priceMax] = price;
// setProducts( {
//     products: storeProducts.slice().filter((productItem)=>{
//         return productItem.price > priceMin && productItem.price < priceMax
//     }),