import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import logo from "./../../logo.svg";

export default class NavBar extends React.PureComponent { 

    render() {
        return (<AppBar>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    <img src={logo} className="App-logo" alt="logo" />
                     Simple React/Redux Demo
                    </Typography>
                </Toolbar>
            </AppBar>);
    }
}