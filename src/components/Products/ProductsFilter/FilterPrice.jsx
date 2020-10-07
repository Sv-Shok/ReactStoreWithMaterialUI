import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useDispatch, useSelector} from "react-redux";
import {filterProductsByPrice} from "../../../actions/productActions";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function FilterPrice() {

    const products = useSelector(state=> state.products.items);
    const dispatch = useDispatch();


    const classes = useStyles();
    const [value, setValue] = React.useState([1000, 15000]);
    const [maxPrice, MinPrice] = value;
    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(filterProductsByPrice(products, newValue));
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                max={100000}
            />
            <Typography id="range-slider" gutterBottom>
                Ціна: <span> від {maxPrice} грн. до {MinPrice} грн.</span>
            </Typography>
        </div>
    );
}