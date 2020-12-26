import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//components
import Dashboard from "./Dashboard";
import login from "./Login.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login}/>
        <Route path="/Dashboard" component={Dashboard}/>
      </Switch>   
    </Router>
   
  );
}