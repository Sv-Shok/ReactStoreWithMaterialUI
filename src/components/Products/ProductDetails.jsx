import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import image from './../../img/bike.jpg';
import Button from "@material-ui/core/Button";
import {storeProducts} from '../../data';

const useStyles = makeStyles((theme)=>({
    formContainer:{
        width: "300px",
        display: 'flex',
        justifyContent: "space-around",
        flexDirection: "column",
        padding: "1rem",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    section:{
        display: 'flex',
    },
    imageProduct:{
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

const ProductDetails = (props)=> {
    const productId = props.match.params.id;
    const product = storeProducts.find(element=> element.id === +productId);
    const {title, img, price, info, inCart, count, total} = product;
    const classes = useStyles();
    return (
        <Container  maxWidth="lg" >
            <div>
                <Typography variant="h3" component="h3">
                    {title}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item container xs={12} md={6} alignItems="center" justify="center">
                        <img className={classes.imageProduct} src={img} alt="bike"/>
                    </Grid>
                    <Grid item container xs={12} md={6} alignItems="center" justify="center">
                        <Paper variant="outlined" className={classes.formContainer}>
                            <Typography variant="h6">{price} грн</Typography>
                            <Button variant="contained" color="primary">
                                Купити
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Швидко замовити
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item  xs={12}>
                        <Paper variant="outlined">
                        <Typography variant="h4">Опис</Typography>
                        <Typography variant="subtitle1">
                            {info}
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        </Container>

    );
};

export default ProductDetails;