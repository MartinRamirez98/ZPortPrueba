import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Toolbar, Typography, CssBaseline, Grid, Button, Card, CardMedia,
    CardContent, CardActions, CardHeader, Collapse, CardActionArea, Link, Box,
    Avatar, IconButton
} from "@material-ui/core";
import clsx from 'clsx';
import { useStyles } from "./Bundles.module";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player'

export default function Bundles(props) {
    const classes = useStyles();
    const video = props.history.location.state.video

    return (
        <Grid container direction ="column" className={classes.banner} style={{height:"830px"}}>

        <Grid item container direction="column" justify="flex-start" style={{ height: "60%" }} className={classes.banner}>
            <Grid item>
                <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                    <Box fontSize={30} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                        {video.tema}
                    </Box>
                </Typography>
                <Grid item container direction="row" style={{ height: "100%" }}>
                    <Grid item xs={12} md={7} style={{ height: "100%" }}>
                        <ReactPlayer
                            url={video.url}
                            light={true}
                            height="87%"
                            width="95%"
                            style={{ marginLeft: 25 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                            <Box fontSize={20} fontFamily="Roboto" color="#fff"  mb={2}>
                                Mentor: {video.profesor}
                            </Box>
                            <Box fontSize={20} fontFamily="Roboto" color="#fff"  mb={2}>
                                Fecha del taller: {video.fecha}
                            </Box>
                            <Box fontSize={20} fontFamily="Roboto" color="#fff"  mb={2}>
                                Descripción: {video.descripcion}
                            </Box>
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
                <Grid item container direction="column" className={classes.banner}>
                    <Grid item>
                <Typography align="center" style={{ marginLeft: 35, marginTop: 25 }}>
                    <Box fontSize={30} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                        ¡Inscribete aquí!
                    </Box>
                </Typography>
                        
                    </Grid>
                    <Grid item>
                <Button className={classes.darkButton} style={{marginLeft:25}}>
                    Inscripciones
                </Button>

                    </Grid>
                </Grid>
        </Grid>
    );
}