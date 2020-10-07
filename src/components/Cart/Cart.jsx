import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import CartItem from "./CartItem";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "sticky",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    container: {
        justifyContent: "space-between",
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalSum = cartItems.reduce((a, c) => a + c.price * c.count, 0);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="secondary" onClick={handleClickOpen}>
                <Badge color="secondary" badgeContent={cartItems.length}>
                    <CartIcon style={{ fontSize: "2.5rem" }} />
                </Badge>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Корзина
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            закрити
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg">
                    {cartItems.length === 0 ? (
                        <div>Корзина пуста</div>
                    ) : (
                        <Grid container spacing={2}>
                            <Grid item container alignItems="center" spacing={2}>
                                <Grid item md={3}>
                                    photo
                                </Grid>
                                <Grid item md={3}>
                                    name
                                </Grid>
                                <Grid item md={3}>
                                    count
                                </Grid>
                                <Grid item md={3}>
                                    price
                                </Grid>
                            </Grid>
                            {cartItems.map((item) => (
                                <CartItem cartData={item} key={item.id} />
                            ))}
                            <Grid item xs={12} container justify="center">
                                Загальна сума {totalSum} грн.
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </Dialog>
        </div>
    );
}