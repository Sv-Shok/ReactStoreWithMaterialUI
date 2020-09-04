import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function FilterPrice({filterProductsPrice}) {
    const classes = useStyles();
    const [value, setValue] = React.useState([1000, 15000]);
    const [maxPrice, MinPrice] = value;
    const handleChange = (event, newValue) => {
        setValue(newValue);
        filterProductsPrice(newValue);
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