import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
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

const Header = ({setDrawerOpen}) => {
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
                <Cart/>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </Container>
        </AppBar>

    )
};

export default Header;