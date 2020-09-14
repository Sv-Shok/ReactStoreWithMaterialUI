import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import FilterOptions from "./ProductsFilter/FilterOptions";
import FilterPrice from "./ProductsFilter/FilterPrice";


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

    const classes = useStyles();
  return (
      <Container  maxWidth="lg" >
          <div className={classes.containerFilter}>
              <FilterPrice filterProductsPrice={filterProductsPrice}/>
              <FilterOptions sortProducts={sortProducts} />
          </div>
          <Grid container spacing={4}>
              {stateProducts.products.map((card)=>{
                  return (
                      <Grid item key={card.id} xs={12} sm={6} md={4}>
                              <ProductCard card={card} addToCart={addToCart} />
                      </Grid>
                  )
              })}
          </Grid>
      </Container>

  );
};

export default Products;