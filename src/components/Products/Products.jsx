import React from 'react';
import Container from '@material-ui/core/Container';
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {storeProducts} from "./../../data";

const useStyles = makeStyles({
    itemAlign:{
        alignItems: 'center'
    }
});

const Products = ()=> {
    const classes = useStyles();
  return (
      <Container  maxWidth="lg" >
          <h1>This is our content products</h1>
          <Grid container spacing={4}>
              {storeProducts.map((card, index)=>{
                  return (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                              <ProductCard {...card} />
                      </Grid>
                  )
              })}
          </Grid>
      </Container>

  );
};

export default Products;