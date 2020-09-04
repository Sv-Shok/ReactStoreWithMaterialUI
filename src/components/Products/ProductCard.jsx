import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Link} from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme)=>({
    media: {
        height: 250,

    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 600,
    }
}));

const ProductCard = (props)=> {

     const {id, title, img, price, info, inCart, count, total} = props;

    const classes = useStyles();
    return (
        <Card >
            <Link to={`/productDetails/${id}`}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant='subtitle1' color="textSecondary" component="p">
                        {price} грн
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Link to={`/productDetails/${id}`}>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </Link>
                <Button size="small" color="primary" >
                    <AddShoppingCartIcon style={{ fontSize: "2.5rem" }} />
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;