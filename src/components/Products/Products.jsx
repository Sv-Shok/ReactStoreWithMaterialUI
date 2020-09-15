import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import FilterOptions from "./ProductsFilter/FilterOptions";
import FilterPrice from "./ProductsFilter/FilterPrice";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../actions/productActions";


const useStyles = makeStyles((theme)=>({
    itemAlign:{
        alignItems: 'center'
    },
    containerFilter:{
        display: "flex",
        justifyContent: 'space-around',
        paddingTop: '2.5rem',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        marginBottom: '2rem'
    },
    '@media screen and (max-width:768px)': {
        containerFilter:{
            flexDirection:' column',
        }
    }
}));

const Products = (props)=> {
    const {addToCart, filterProductsPrice, sortProducts, stateProducts} = props;
    let products = useSelector(state=> state.products.items);
    let productsFilter = useSelector(state=> state.products.filteredItems);
    if(productsFilter){ products = productsFilter}
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(()=>{
    dispatch(fetchProducts());
    },[]);
  return (
      <Container  maxWidth="lg" >
          <div className={classes.containerFilter}>
              <FilterPrice filterProductsPrice={filterProductsPrice}/>
              <FilterOptions sortProducts={sortProducts} />
          </div>
          {!products
              ? <div>Loading...</div>
              :   <Grid container spacing={4}>
                  { products.map((card, index)=>{
                      return (
                          <Grid item key={card.id} xs={12} sm={6} md={4}>
                              <ProductCard card={card} addToCart={addToCart} />
                          </Grid>
                      )
                  })}
              </Grid>
          }

      </Container>

  );
};

export default Products;