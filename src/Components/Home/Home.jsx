import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Toolbar,
    Typography,
    CssBaseline,
    Container,
    Grid,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Link,
    Box
} from "@material-ui/core";
import { useStyles } from "./Home.module";
const sections = [
    { title: 'Ver Categorias', url: '/categorias' }
];

export default function Home(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container direction="column" justify="center" style={{ height: 490 }} className={classes.banner}>
                <Typography align="center" className={classes.bannerImage}>
                    <Box fontSize={70} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2} className={classes.bannerImage}>
                        CONOCE NUESTROS TALLERES
                    </Box>
                </Typography>
            </Grid>
            <Grid container>
                <Grid spacing={0} item xs={12} md={6} container direction="column" justify="center" style={{ height: 490 }}>
                    <Grid item>
                    <Typography align="center" style={{margin:25}}>
                        <Box fontSize={35} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold" mb={2}>
                            Los talleres ZPORT te darán la oportunidad de crecer y aprender de la mano de grandes atletas...
                    </Box>
                    </Typography>
                    </Grid>
                    <Grid item>
                        Aqui va carrusel con comentarios de los talleres
                    </Grid>
                </Grid>
                <Grid spacing={0} item xs={12} md={6} container direction="column" justify="center" style={{ height: 490 }} className={classes.darkBG}>
                <Grid item>
                    <Typography align="center" style={{margin:25}}>
                        <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                            ¿Quieres inscrbirte? 
                        </Box>
                        <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                            ¡Revisa nuestras ofertas aqui! 
                        </Box>
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Button className={classes.darkButton}>
                            Ver Paquetes
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" style={{height:"500px"}} alignItems="center" className={classes.darkBG}>
                <Grid item>
                    <Typography >
                    <Box fontSize={35} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                        No te pierdas nuestros proximos talleres:
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}