import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {sortProducts} from "../../../actions/productActions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function FilterOptions() {

    let products = useSelector(state=> state.products.items);
    let productsForFilter = useSelector(state=> state.products.filteredItems);
    if(productsForFilter){ products = productsForFilter}
    const dispatch = useDispatch();

    const classes = useStyles();
    const [state, setState] = React.useState({
        sort: '',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        dispatch(sortProducts(products, event.target.value));
        // sortProducts( event.target.value);
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
                    <Select
                        native
                        value={state.sort}
                        onChange={handleChange}
                        inputProps={{
                            name: 'sort',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </Select>
            </FormControl>
        </div>
    );
}