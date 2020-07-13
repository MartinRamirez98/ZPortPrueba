import { makeStyles } from '@material-ui/core/styles';
import fondo from '../../Assets/Images/fondo.jpg'

export const useStyles = makeStyles((theme) => ({
    banner:{
      backgroundImage: 'linear-gradient(to right, #4a0674 , #1c4172)',
    },  
    bannerImage:{
      backgroundImage: "url(" + fondo + ")"
    },
    darkBG:{
      backgroundColor:'#10042f',
      color:'#fff'
    },
    darkButton:{
      backgroundImage: 'linear-gradient(to right, #c700ff , #03fbf8)',
      cursor: 'pointer',
      borderRadius: '40px',
      color: '#fff',
      width: '200px',
      height:'60px',
      fontWeight: '700',
      fontSize:'20px',
      textAlign: 'center',
      textJustify:'center',
      fontFamily: 'Roboto',
      padding: '5px',
      "&:hover":{
        border:'2px solid #fff',
      }
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(0, 0, 0),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'center',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    peruButton:{
      color: 'white',
      backgroundColor: '#9a031e',
      '&:hover':{
        color: 'black',
      }      
    },
    root: {
      width:"100%",
      height:"100%",
      maxWidth: "100%",
      maxHeight:"100%"
    },
    flex:{
      height:"100%"
    }
  }));
