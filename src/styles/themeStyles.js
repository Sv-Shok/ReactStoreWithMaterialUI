import {createMuiTheme} from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
// import white from '@material-ui/core/colors/';

export default createMuiTheme({
    palette: {
        primary: {
            main: grey[800],
        },
    },
    typography: {
            h3: {
                '@media screen and (max-width:768px)': {
                    fontSize: '2rem',
                },

            },
    },
});
