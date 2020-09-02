import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFuturePostContent:{
        position: "relative",
        padding: theme.spacing(12)
    },
    overlay:{
        position: "absolute",
        top:"0",
        bottom:"0",
        right:"0",
        left:"0",
        backgroundColor: "rgba(0,0,0,0.5)"
    }

}));

const Main = ()=> {
    const classes = useStyles();
    return (
        <>
            <main>
                <Paper
                    className={classes.mainFeaturesPost}
                    style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
                >
                    <Container maxWidth="lg">
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <div className={classes.mainFuturePostContent}>
                                    <Typography
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Елесктро транспорт
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Економно. Екологічно
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}

export default Main;
