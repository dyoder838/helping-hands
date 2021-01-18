import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Nav from "./components/Nav/index"
import { makeStyles } from '@material-ui/core/styles';
import RoadSign from "./components/RoadSign"

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

    },
    navBar: {
        zIndex: 1,
    },

}));

function App() {

    const classes = useStyles();

    return (

        <Router>

            <Grid container className={classes.root} >

                <Grid item xs={12} className={classes.navBar}></Grid>
                <Nav />


                <Grid item xs={12} className={classes.roadSign}></Grid>
                <RoadSign />

            </Grid>

            <Switch>
                <Route exact path="/">
                    <h1>Main</h1>
                </Route>

                <Route exact path="/welcome">
                    <h1>Welcome</h1>
                </Route>

                <Route exact path="/whatsNew">
                    <h1>What's New</h1>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
