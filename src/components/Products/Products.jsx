import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {storeProducts} from "./../../data";
import FilterOptions from "./ProductsFilter/FilterOptions";
import FilterPrice from "./ProductsFilter/FilterPrice";

const useStyles = makeStyles({
    itemAlign:{
        alignItems: 'center'
    },
    containerFilter:{
        display: "flex",
        justifyContent: 'space-around',
        paddingTop: '1rem'
    },
});

const Products = ()=> {
    const [stateProducts, setProducts] = useState({
        products: storeProducts,
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
        console.log(price);
        setProducts( {
            products: storeProducts.slice().filter((productItem)=>{
                return productItem.price > priceMin && productItem.price < priceMax
            }),
            sort:"",
            filterPrice:""
        })
    };

    const classes = useStyles();
  return (
      <Container  maxWidth="lg" >
          <div className={classes.containerFilter}>
            <FilterOptions sortProducts={sortProducts} />
            <FilterPrice filterProductsPrice={filterProductsPrice}/>
          </div>
          <h1>This is our content products</h1>
          <Grid container spacing={4}>
              {stateProducts.products.map((card)=>{
                  return (
                      <Grid item key={card.id} xs={12} sm={6} md={4}>
                              <ProductCard {...card} />
                      </Grid>
                  )
              })}
          </Grid>
      </Container>

  );
};

export default Products;