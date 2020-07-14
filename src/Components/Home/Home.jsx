import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Toolbar, Typography, CssBaseline, Grid, Button, Card, CardMedia,
    CardContent, CardActions, CardHeader, Collapse, CardActionArea, Link, Box,
    Avatar, IconButton
} from "@material-ui/core";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from "./Home.module";
import { responsive, responsiveLarge } from '../../Assets/Data/Misc'
import { videosProx, videosPrev, resenas } from '../../Assets/Data/Data'
import { isBrowser, isMobile, isTablet } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player'
import ReactStars from "react-rating-stars-component";

export default function Home(props) {
    const classes = useStyles();

    const handleMoreInfo =(video)=>{
        props.history.push({
            pathname:"/workshopInfo",
            state:{video:video}
        })
        console.log(props);
    }

    const handleViewBundles =()=>{
        props.history.push({
            pathname:"/bundles"
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container direction="column" justify="center" style={{ height: 340 }} className={classes.banner}>
                <Typography align="center" className={classes.bannerImage}>
                    <Box fontSize={70} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                        CONOCE NUESTROS TALLERES
                    </Box>
                </Typography>
            </Grid>
            <Grid container>
                <Grid spacing={0} item xs={12} md={6} container direction="column" justify="center" >
                    <Grid item>
                        <Typography align="center" style={{ margin: 25 }}>
                            <Box fontSize={35} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold" mb={6}>
                                Los talleres ZPORT te darán la oportunidad de crecer y aprender de la mano de grandes deportistas...
                    </Box>
                        </Typography>
                    </Grid>
                    <Typography align="left" style={{ marginLeft: 35 }}>
                        <Box fontSize={25} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold" mb={2}>
                            Reseñas recientes:
                    </Box>
                    </Typography>
                    <Grid item container direction="row">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={100}
                            keyBoardControl={false}
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {resenas ? resenas.map((x) => (
                                <Grid item className={classes.flex}>
                                    <Card className={classes.flex} >
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" className={classes.avatar}>
                                                    {x.mentee[0]}
                                                </Avatar>
                                            }
                                            action={
                                                <ReactStars
                                                    count={5}
                                                    value={x.calificacion}
                                                    edit={false}
                                                />
                                            }
                                            title={x.mentee}
                                            subheader={x.tema}
                                        />
                                        <CardContent style={{ height: "100%" }}>

                                            <Typography gutterBottom variant="p" component="p" >
                                                {x.resena}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            )) : null}
                        </Carousel>
                    </Grid>
                </Grid>
                <Grid spacing={0} item xs={12} md={6} container direction="column" justify="center" className={classes.darkBG}>
                    <Grid item>
                        <Typography align="center" style={{ margin: 25 }}>
                            <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                                ¿Quieres inscribirte?
                        </Box>
                            <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                                ¡Revisa nuestras ofertas aquí!
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button className={classes.darkButton} onClick={()=>handleViewBundles()}>
                            Ver Paquetes
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" style={{ height: "600px" }} alignItems="flex-start" className={classes.darkBG}>
                <Grid item>
                    <Typography style={{ marginLeft: 35, marginTop: 25 }}>
                        <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                            No te pierdas nuestros próximos talleres:
                        </Box>
                    </Typography>
                </Grid>
                <Grid item container direction="row" style={{ marginTop: 25 }} >
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsiveLarge}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={100}
                        keyBoardControl={false}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {videosProx ? videosProx.map((x) => (
                            <Grid item className={classes.flex} style={{ height: 440 }}>
                                <Card className={classes.flex} >
                                    <CardActionArea onClick={()=>handleMoreInfo(x)}>
                                        <CardHeader
                                            title={x.tema}
                                            subheader={"Mentor: " + x.profesor + " - Fecha: " + x.fecha}
                                            style={{ height: "105px" }}
                                        />
                                    </CardActionArea>
                                    <CardContent >
                                        <ReactPlayer
                                            url={x.url}
                                            light={true}
                                            height="240px"
                                            width="100%"
                                        />
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Grid container direction="column" justify="center">
                                        <Button onClick={()=>handleMoreInfo(x)}>
                                            Más Información
                                        </Button>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) : null}
                    </Carousel>
                </Grid>
            </Grid>
            <Grid container direction="column" style={{ height: "600px" }} alignItems="flex-start" className={classes.darkBG}>
                <Grid item>
                    <Typography style={{ marginLeft: 35, marginTop: 25 }}>
                        <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                            Revisa nuestros talleres pasados:
                        </Box>
                    </Typography>
                </Grid>
                <Grid item container direction="row" style={{ marginTop: 25 }}>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsiveLarge}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={100}
                        keyBoardControl={false}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {videosPrev ? videosPrev.map((x) => (
                            <Grid item className={classes.flex} style={{ height: 440 }}>
                                <Card className={classes.flex} >
                                    <CardActionArea onClick={()=>handleMoreInfo(x)}>
                                        <CardHeader
                                            title={x.tema}
                                            subheader={"Mentor: " + x.profesor + " - Fecha: " + x.fecha}
                                            style={{ height: "105px" }}
                                        />
                                    </CardActionArea>
                                    <CardContent >
                                        <ReactPlayer
                                            url={x.url}
                                            light={true}
                                            height="240px"
                                            width="100%"
                                        />
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Grid container direction="column" justify="center">
                                        <Button onClick={()=>handleMoreInfo(x)}>
                                            Más Información
                                        </Button>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) : null}
                    </Carousel>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}