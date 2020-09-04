import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        justifyContent: 'space-between'
    }
}));

const CartItem = ({cartData, addToCart}) =>{
    const {id, title, img, price, info, inCart, count, total} = cartData;
    debugger
    const classes = useStyles();
    return (
        <>
        <ListItem className={classes.container}>
            <div><Link to="#"><img src={img} width="189" alt={title}/></Link></div>
            <div>{title}</div>
            <div>{count}</div>
            <div>{price}</div>
        </ListItem>
        <Divider />
        </>
    );
};

export default CartItem;