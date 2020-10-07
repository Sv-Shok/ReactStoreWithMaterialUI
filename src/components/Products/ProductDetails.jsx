import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailsProduct} from "../../actions/productActions";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: "300px",
        display: 'flex',
        justifyContent: "space-around",
        flexDirection: "column",
        padding: "1rem",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    section: {
        display: 'flex',
    },
    imageProduct: {
        width: "600px",
    },
    '@media screen and (min-width:320px)': {
        imageProduct: {
            width: "320px",
        },
    },
    '@media screen and (min-width:768px)': {
        imageProduct: {
            width: "500px",
        },
    }
}));

const ProductDetails = (props) => {
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailsProduct(productId));
    }, []);
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            {loading
                ? <div>loading</div>
                : error
                    ? <div>Error</div>
                    : <div>
                        <Typography variant="h3" component="h3">
                            {product.title}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item container xs={12} md={6} alignItems="center" justify="center">
                                <img className={classes.imageProduct} src={product.img} alt="bike"/>
                            </Grid>
                            <Grid item container xs={12} md={6} alignItems="center" justify="center">
                                <Paper variant="outlined" className={classes.formContainer}>
                                    <Typography variant="h6">{product.price} грн</Typography>
                                    <Button variant="contained" color="primary">
                                        Купити
                                    </Button>
                                    <Button variant="outlined" color="secondary">
                                        Швидко замовити
                                    </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper variant="outlined">
                                    <Typography variant="h4">Опис</Typography>
                                    <Typography variant="subtitle1">
                                        {product.info}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
            }
        </Container>

    );
};

export default ProductDetails;