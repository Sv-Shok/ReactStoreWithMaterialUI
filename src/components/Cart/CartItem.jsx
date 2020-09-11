import React from 'react';
import { Link } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';
import { OutlinedInput } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    container:{
        borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    cartQuantity:{
        border: `1px solid ${theme.palette.primary.main}`,
    },
    inputCount: {
      width: "2rem"
    }
}));


const CartItem = ({cartData, addToCart, removeFromCart, decCartCount}) =>{
    const {id, title, img, price, info, inCart, count, total} = cartData;
    const classes = useStyles();
    return (
        <>
        <Grid item container
              alignItems="center"
              spacing={2}
              className={classes.container}
        >
            <Grid item xs={6} md={3}><Link to="#"><img src={img} width="189" alt={title}/></Link></Grid>
            <Grid item xs={6} md={3}>{title}</Grid>
            <Grid item xs={6} md={3}>
                <div><button onClick={()=> decCartCount(cartData)}>-</button>
                    <span>{ count }</span>
                    <button onClick={()=> addToCart(cartData)}>+</button>
                </div></Grid>
            <Grid item xs={6} md={3}>{price} грн.
                <Button variant="contained" color="primary" onClick={()=>removeFromCart(cartData)}>
                Delete
            </Button>
            </Grid>
        </Grid>
        </>
    );
};

export default CartItem;