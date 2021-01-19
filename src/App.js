import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Nav from "./components/Nav/index"
import { makeStyles } from '@material-ui/core/styles';
import RoadSign from "./components/RoadSign";
import MainPage from "./pages/Main";
import WelcomePage from "./pages/Welcome";
import WhatsNewPage from "./pages/WhatsNew";


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
                <Route exact path="/" component={MainPage}>
                </Route>

                <Route exact path="/welcome" component={WelcomePage}>
                    
                </Route>

                <Route exact path="/whatsNew" component={WhatsNewPage}>
                    
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
