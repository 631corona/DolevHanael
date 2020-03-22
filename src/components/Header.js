import React, { Component } from "react"
import Gallery from "./Gallery"
import { AppBar, Container, Toolbar, IconButton, Typography, Tabs, Tab, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';



export default class Header extends Component {
    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography>Corona</Typography>
                    </Toolbar>
                </AppBar>
                <Paper position="static">
                    <Tabs>
                        <Tab label="מעבדות מחקר" />
                        <Tab label="גרף התקדמות" />
                        <Tab label="חיילים בבידוד" />
                    </Tabs>
                </Paper>
                <Gallery />
            </>
        )
    }
}