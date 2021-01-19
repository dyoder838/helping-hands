import React from 'react';
import InfoPane from "../../components/InfoPane";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

    },
    info: {
        marginTop: 10, 
    }
}));

export default function MainPage() {
   
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            <Grid item xs={12} className={classes.info}>
                <InfoPane></InfoPane >
            </Grid>

        </Grid>

    )
}