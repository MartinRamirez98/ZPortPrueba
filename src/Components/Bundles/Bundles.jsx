import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {
    Typography, Grid, Button, Card, CardMedia,
    CardContent, CardActions, Box,
} from "@material-ui/core";
import { useStyles } from "./Bundles.module";
import "react-multi-carousel/lib/styles.css";
import { membresias, paquetes } from '../../Assets/Data/Data'
import taller from '../../Assets/Images/taller.jpg'
import ls from 'local-storage'
import membresia from '../../Assets/Images/membresia.jpg'
import Swal from "sweetalert2";

export default function Bundles(props) {
    const classes = useStyles();

    const buyBundle = (x) => {
        const mensaje="Desea comprar el paquete de "+x.cantTaller+" "+x.titulo+" por S/ "+x.costoSoles+"?"
        if (ls.get('isLogged')) {
            Swal
                .fire({
                    title: "Confirmar Compra",
                    text: mensaje,
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                })
                .then(async (result) => {
                    if (result.value) {
                        const numTalleres=ls.get('talleres')
                        if(numTalleres){
                            ls.set('talleres',numTalleres+x.cantTaller);
                            Swal.fire({
                                title: "OK",
                                text: "Se realizo la compra correctamente",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                            })
                        }else{
                            ls.set('talleres',x.cantTaller);
                            Swal.fire({
                                title: "OK",
                                text: "Se realizo la compra correctamente",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                            })
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

    const buyMembership =(x)=>{
        const mensaje="Desea comprar el paquete de "+x.cantMes+" "+x.titulo+" por S/ "+x.costoSoles+"?"
        if (ls.get('isLogged')) {
            Swal
                .fire({
                    title: "Confirmar Compra",
                    text: mensaje,
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                })
                .then(async (result) => {
                    if (result.value) {
                        const numTalleres=ls.get('talleres')
                        if(numTalleres){
                            ls.set('talleres',numTalleres+x.cantTaller);
                            Swal.fire({
                                title: "OK",
                                text: "Se realizo la compra correctamente",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                            })
                        }else{
                            ls.set('talleres',x.cantTaller);
                            Swal.fire({
                                title: "OK",
                                text: "Se realizo la compra correctamente",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                            })
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
        <div className={classes.banner} style={{ height: "1200px"}}>
            <Grid container className={classes.banner} style={{marginBottom:15 }}>
                <Grid item spacing={0} container direction="row" justify="flex-start" className={classes.banner} style={{ height: "100%" }}>
                    <Grid item xs={12}>
                        <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                            <Box fontSize={25} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                                Elige el paquete que mejor se acomode a tus necesidades
                            </Box>
                        </Typography>
                    </Grid>
                    {paquetes ? paquetes.map((x) => (
                        <Grid item xs={12} md={4} style={{ width: "90%" }}>
                            <Card className={classes.flex} style={{ width: "90%", marginLeft: 15 }}>
                                <CardMedia className={classes.media}
                                    image={taller}
                                />
                                <CardContent style={{ backgroundColor: '#cdcddd' }}>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            {x.cantTaller}
                                        </Box>
                                    </Typography>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            {x.titulo}
                                        </Box>
                                    </Typography>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            Por S/ {x.costoSoles}
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing style={{ backgroundColor: '#cdcddd' }}>
                                    <Grid container direction="column" justify="center">
                                        <Button style={{ fontSize: 20 }} onClick={() => buyBundle(x)}>
                                            Adquirir
                                        </Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    )) : null}

                    <Grid item xs={12}>
                        <Typography align="left" style={{ marginLeft: 35, marginTop: 25 }}>
                            <Box fontSize={25} fontFamily="Roboto" color="#fff" fontWeight="fontWeightBold" mb={2}>
                                ... O suscríbete a una membresía
                            </Box>
                        </Typography>
                    </Grid>
                    {membresias ? membresias.map((x) => (
                        <Grid item xs={12} md={4} style={{ width: "90%" }}>
                            <Card className={classes.flex} style={{ width: "90%", marginLeft: 15 }}>
                                <CardMedia className={classes.media}
                                    image={membresia}
                                />
                                <CardContent style={{ backgroundColor: '#cdcddd' }}>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            {x.cantMes}
                                        </Box>
                                    </Typography>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            {x.titulo}
                                        </Box>
                                    </Typography>
                                    <Typography align="center" gutterBottom variant="p" component="p" >
                                        <Box fontSize={30} fontFamily="Roboto" color="#000" fontWeight="fontWeightBold">
                                            Por S/ {x.costoSoles}
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing style={{ backgroundColor: '#cdcddd' }}>
                                    <Grid container direction="column" justify="center">
                                        <Button style={{ fontSize: 20 }} onClick={() => buyMembership(x)}>
                                            Suscribirse
                                        </Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    )) : null}
                </Grid>
            </Grid>
        </div>
    );
}