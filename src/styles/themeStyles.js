import {createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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
