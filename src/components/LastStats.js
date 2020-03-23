import React, { Component, Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(-90deg, rgba(27,38,44,1) 0%, rgba(15,76,117,1) 35%, rgba(187,225,250,1) 100%)',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontFamily: ['Roboto', 'sans-serif'],
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
});


export default function LastStats(props) {
    const classes = useStyles();

    return (
        <>
            <h1 style={{ color: "#0f4c75" }}>פה יוצג מצב התקדמות המעבדות- ריבוע עם הפרטים של כל מעבדה</h1>
            <Grid container spacing={3}>
                <Grid item justify={"center"}>
                    <Paper classes={{ root: classes.root }} elevation={3}>מתים: {props.latest.deaths}</Paper>
                </Grid>
                <Grid item>
                    <Paper classes={{ root: classes.root }} elevation={3}>החלימו: {props.latest.recovered}</Paper>
                </Grid>
                <Grid item>
                    <Paper classes={{ root: classes.root }} elevation={3}>נדבקו: {props.latest.confirmed}</Paper>
                </Grid>

            </Grid>

        </>
    )
}
