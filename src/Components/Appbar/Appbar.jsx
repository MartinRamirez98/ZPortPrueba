import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Link,
    Grid,
    Box,
    Button,
} from "@material-ui/core";
import { useStyles } from "./Appbar.module";
import logo2 from "../../Assets/Images/logo2.png"
import { useHistory } from 'react-router-dom';
import ls from 'local-storage'

export default function Appbar(props) {
    const [isLogged, setIsLogged] = useState()
    useEffect(() => {
        setIsLogged(ls.get('isLogged'))
        console.log(isLogged);

    }, [])

    let history = useHistory();
    const classes = useStyles();

    const goToTalleres = () => {
        history.push('/')
    }

    const login = async () => {
        await ls.set('isLogged', true);
        await setIsLogged(true);
        console.log(isLogged);
    }

    const logout = async () => {
        await ls.set('isLogged', false);
        await setIsLogged(false);
        console.log(isLogged);
    }

    const handleTitleClick = (link) => {
        window.open(link, "_blank")
    }

    return (
        <div>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid item xs={2}>
                            <Typography className={classes.toolbarTitle}>
                                <img onClick={() => handleTitleClick("https://www.zport.org/")} src={logo2} style={{ height: "75px", width: "140px" }} />
                            </Typography>
                        </Grid>


                        <Grid item xs={10} container justify="space-between" alignItems="center">
                            <Grid item xs={2}>
                                <Typography align="center" onClick={() => goToTalleres()} className={classes.toolbarItem}>
                                        Talleres ZPORT
                                </Typography>

                            </Grid>
                            <Typography onClick={() => handleTitleClick("https://www.zport.org/quiero-ser-mentor")} className={classes.toolbarItem}>
                                Conviértete en mentor
                                </Typography>
                            <Grid item xs={2}>
                                <Typography align="center" onClick={() => handleTitleClick("https://www.zport.org/faq")} className={classes.toolbarItem}>
                                    Sobre ZPORT
                                </Typography>

                            </Grid>
                            <Grid item xs={2}>
                                <Typography align="center" onClick={() => handleTitleClick("https://www.zport.org/mentores")} className={classes.toolbarItem}>
                                    Encuentra un especialista para ti
                                </Typography>

                            </Grid>
                            <Grid item xs={4} md={3}>
                                {isLogged ?
                                    <Button onClick={() => logout()} variant="button" className={classes.toolbarLogin}>
                                        Cerrar sesión
                                </Button>
                                    :
                                    <Button onClick={() => login()} variant="button" className={classes.toolbarLogin}>
                                        Iniciar sesión
                                </Button>
                                }

                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
