import React from 'react';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg";
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';
import Container from '@material-ui/core/Container';
import Badge from '@material-ui/core/Badge';
import Cart from "../Cart/Cart";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    '@media screen and (max-width:768px)': {
        logo: {
            width: "4rem"
        },
    }
}));

const Header = ({setDrawerOpen, cartItems, addToCart, removeFromCart, totalSum, decCartCount, InputChangeCartCount}) => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" >
            <Container maxWidth="xl">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={()=>setDrawerOpen(true)}
                >
                    <MenuIcon fontSize='large'/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to={"/"}><img src={Logo} alt="volt" className={classes.logo} /></Link>
                </Typography>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart}
                      totalSum={totalSum} decCartCount={decCartCount}
                      addToCart={addToCart} InputChangeCartCount={InputChangeCartCount}
                />
                {/*<Link to="cart">*/}
                {/*<Button style={{color: "white"}}>*/}
                {/*    <Badge color="secondary"  badgeContent={cartItems}>*/}
                {/*        <CartIcon style={{ fontSize: "2.5rem" }}/>*/}
                {/*    </Badge>*/}
                {/*</Button>*/}
                {/*</Link>*/}
                <Button color="inherit">Login</Button>
            </Toolbar>
            </Container>
        </AppBar>

    )
};

export default Header;