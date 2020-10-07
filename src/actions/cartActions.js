import { ADD_TO_CART, DEC_CART_COUNT, REMOVE_FROM_CART } from "../type";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
        if (item.id === product.id) {
            alreadyInCart = true;
            item.count++;
        }
    });
    if (!alreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState()
        .cart.cartItems.slice()
        .filter((item) => item.id !== product.id);
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decCartCount = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((item) => {
        if (item.id === product.id && product.count > 1) {
            item.count--;
        }
    });
    dispatch({
        type: DEC_CART_COUNT,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
