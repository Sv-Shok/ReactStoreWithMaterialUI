import React, {useState} from 'react';
import Header from "./components/Header/Header";
import AppDrawer from "./components/Drawer/Drawer";
import {Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import store from "./store";
import {Provider} from "react-redux";


const App = (props)=>{
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return(
        <Provider store={store}>
        <div>
            <Header setDrawerOpen={setDrawerOpen}/>
            <AppDrawer open={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
            <Route exact path='/' component={Main} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/products' render={() => <Products />}
            />
            <Route path='/productDetails/:id' component={ProductDetails} />
        </div>
        </Provider>
    )};

export default App;
