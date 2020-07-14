import React, { useEffect, useState } from 'react';
import {
    AppBar, Toolbar, Typography, CssBaseline, Link, Grid, Box, Button,
    IconButton, SwipeableDrawer, List, ListItem, ListItemText,
} from "@material-ui/core";
import clsx from 'clsx'
import { useStyles } from "./Appbar.module";
import logo2 from "../../Assets/Images/logo2.png"
import { useHistory } from 'react-router-dom';
import ls from 'local-storage'
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Appbar(props) {
    const [isLogged, setIsLogged] = useState()
    const [state, setState] = React.useState({
        top: false,
      });
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

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const dispatchListAction =(index)=>{
        console.log(index);
        switch (index){
            case 0: 
                goToTalleres();
                break;
            case 1: 
                handleTitleClick("https://www.zport.org/quiero-ser-mentor");
                break;
            case 2: 
                handleTitleClick("https://www.zport.org/faq");
                break;
            case 3: 
                handleTitleClick("https://www.zport.org/mentores");
                break;
        } 
    }

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Talleres ZPORT', 'Conviértete en mentor', 'Sobre ZPORT', 'Encuentra un especialista para ti'].map((text, index) => (
              <ListItem button key={text} onClick={()=>dispatchListAction(index)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      ); 

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
                            <Grid item xs={0} md={1} className={classes.menuIcon}>
                                <IconButton onClick={toggleDrawer('top', true)} color="primary" aria-label="drawer" component="span">
                                    <ReorderIcon />
                                </IconButton>
                                <SwipeableDrawer
                                    anchor="top"
                                    open={state['top']}
                                    onClose={toggleDrawer('top', false)}
                                    onOpen={toggleDrawer('top', true)}
                                >
                                    {list('top')}
                                </SwipeableDrawer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
