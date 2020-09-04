import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {storeProducts} from "./../../data";
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

const Products = ( {addToCart} )=> {

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