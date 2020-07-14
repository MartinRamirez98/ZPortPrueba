import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Toolbar, Typography, CssBaseline, Grid, Button, Card, CardMedia,
    CardContent, CardActions, CardHeader, Collapse, CardActionArea, Link, Box,
    Avatar, IconButton
} from "@material-ui/core";
import clsx from 'clsx';
import { useStyles } from "./Workshop.module";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player'

export default function Workshop(props) {
    const classes = useStyles();
    const video = props.history.location.state.video

    return (
<div className={classes.banner} style={{ height: "830px" }}>

        <Grid container className={classes.banner}>

            <Grid item container direction="row" justify="flex-start" className={classes.banner}style={{height:"100%"}}>
                <Grid item xs={12}>
                    <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                        <Box fontSize={30} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                            {video.tema}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7} style={{ height: "450px" }}>
                    <ReactPlayer
                        url={video.url}
                        light={true}
                        height="100%"
                        width="95%"
                        style={{ marginLeft: 25 }}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                        <Box fontSize={20} fontFamily="Roboto" color="#fff" mb={2}>
                            Mentor: {video.profesor}
                        </Box>
                        <Box fontSize={20} fontFamily="Roboto" color="#fff" mb={2}>
                            Fecha del taller: {video.fecha}
                        </Box>
                        <Box fontSize={20} fontFamily="Roboto" color="#fff" mb={2}>
                            Descripción: {video.descripcion}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" style={{ marginLeft: 35, marginTop: 25 }}>
                        <Box fontSize={30} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                            ¡Inscribete aquí!
                    </Box>
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.darkButton} style={{ marginLeft: 25 }}>
                        Inscripciones
                </Button>

                </Grid>
            </Grid>
        </Grid >
</div>
    );
}