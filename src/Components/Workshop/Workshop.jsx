import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Typography, Grid, Button, Box
} from "@material-ui/core";
import ls from 'local-storage'
import { useStyles } from "./Workshop.module";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2';

export default function Workshop(props) {
    const classes = useStyles();
    const video = props.history.location.state.video
    const show = props.history.location.state.show
    const handleSubscription = () => {
        const numTal = ls.get('talleres') || 0
        const tema = "Cuenta con " + numTal + " inscripciones disponibles. ¿Está seguro que desea inscibirse al taller: " + video.tema + "?";
        console.log(tema);

        if (ls.get('isLogged')) {
            Swal
                .fire({
                    title: "Confirmar Inscripción",
                    text: tema,
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                })
                .then(async (result) => {
                    if (result.value) {
                        const numTalleres = ls.get('talleres')
                        if (numTalleres > 0) {
                            ls.set('talleres', numTalleres - 1);
                            Swal.fire({
                                title: "¡Gracias!",
                                text: "Te llegará un correo con los detalles del taller",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                            })
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "No cuenta con ningun taller disponible, por favor revise nuestros paquetes",
                                icon: "error",
                            }).then(async (result) => {
                                if (result.value) {
                                    props.history.push({
                                        pathname: "/bundles",
                                    })
                                }
                            });
                        }
                    }
                });
        } else {
            Swal.fire({
                title: "Error",
                text: "Debe logearse para poder realizar la inscripción",
                icon: "error",
            });
        }
    }

    return (
        <div className={classes.banner} style={{ height: "844px" }}>

            <Grid container className={classes.banner}>

                <Grid item container direction="row" justify="flex-start" className={classes.banner} style={{ height: "100%" }}>
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
                            controls={true}
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
                    {show ?
                    <React.Fragment>
                        <Grid item xs={12} >
                            <Typography align="center" style={{ marginLeft: 35, marginTop: 45 }}>
                                <Box fontSize={30} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold">
                                    ¡Inscríbete aquí!
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ marginBottom: 30 }}>
                            <Button onClick={() => handleSubscription()} className={classes.darkButton} style={{ marginLeft: 25 }}>
                                Inscripciones
                            </Button>
                        </Grid>
                    </React.Fragment>
                    : null
                    }
                </Grid>
            </Grid >
        </div>
    );
}