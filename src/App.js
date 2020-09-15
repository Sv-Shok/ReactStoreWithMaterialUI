import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import AppDrawer from "./components/Drawer/Drawer";
import {Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import {storeProducts} from "./data";
import store from "./store";
import {Provider} from "react-redux";


const App = (props)=>{
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    ///////////////////////////////////////////////////

    //products events
    const [stateProducts, setProducts] = useState({
        products: localStorage.getItem("stateProducts")
            ? JSON.parse(localStorage.getItem("stateProducts"))
            : storeProducts.slice(),
        sort:"",
        filterPrice:""
    });


    const sortProducts = (sort)=>{
        setProducts({
            products: stateProducts.products
                .slice()
                .sort((a,b)=> {
                    return    sort === "Newest" ?
                        ((a.id < b.id) ? 1 : -1) :
                        sort === "Oldest" ?
                            ((a.id > b.id) ? 1 : -1) :
                            ((a.id > b.id) ? 1 : -1)
                }),
            sort: sort,
        });
    };

    const filterProductsPrice = (price)=>{
        let [priceMin, priceMax] = price;
        setProducts( {
            products: storeProducts.slice().filter((productItem)=>{
                return productItem.price > priceMin && productItem.price < priceMax
            }),
            sort:"",
            filterPrice:""
        })
    };


    ///////////////////////////////////////////////////
    //cart events

    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    );
    const addToCart = (product)=>{
        let alreadyInCart = false;
        cartItems.forEach((item)=>{
            if(item.id === product.id){
                item.count++;
                setCartItems([
                    ...cartItems,
                ]);
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            product.count = 1;
            product.inCart = true;
            setCartItems([
                ...cartItems,
                product
            ]);
        }
    };

    const decCartCount = (product)=>{
        cartItems.forEach((item)=> {
            if (item.id === product.id && product.count > 1) {
                item.count--;
                setCartItems([
                    ...cartItems,
                ]);
            }
            });
    };

    const removeFromCart = (product)=>{
        setCartItems(cartItems.filter(x=>x.id!==product.id));
        product.inCart = false;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    useEffect(() => {
        countTotalSum(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const [totalSum, setTotalSum] = useState(0);
    const countTotalSum = (cartItems)=>{
        setTotalSum( cartItems.reduce((a,c)=> a + (c.price * c.count),0));

    };

///////////////////////////////////////////////////
    return(
        <Provider store={store}>
        <div>
            <Header setDrawerOpen={setDrawerOpen} cartItems={cartItems} addToCart={addToCart}
                    removeFromCart={removeFromCart} totalSum={totalSum} decCartCount={decCartCount}
            />
            <AppDrawer open={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
            <Route exact path='/' component={Main} />
            <Route path='/contacts' component={Contacts} />
            {/*<Route path='/products' component={Products}/>*/}
            <Route path='/products' render={() => <Products addToCart={addToCart} sortProducts={sortProducts} filterProductsPrice={filterProductsPrice} stateProducts={stateProducts}/>}
            />
            <Route path='/productDetails/:id' component={ProductDetails} />
        </div>
        </Provider>
    )};

export default App;
