import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: '#9a031e',
      backgroundImage: 'linear-gradient(to right, #c700ff , #03fbf8)',
    },
    toolbar: {
      flexWrap: 'wrap',
      marginTop:'5px',
      marginBottom:'5px'
    },
    toolbarTitle: {
      cursor:'pointer',
    },
    toolbarLogin:{
      backgroundColor: 'transparent',
      border: '2px solid #000',
      cursor: 'pointer',
      borderRadius: '50px',
      color: '#000',
      width: '135px',
      textAlign: 'center',
      fontFamily: 'Roboto',
      padding: '5px',
      "&:hover":{
        backgroundColor:'#000',
        color:'#fff',
      }
    },
    toolbarItem:{
      fontFamily: 'Roboto',
      textDecoration: 'none',
      color: '#fff',
      fontWeight: '700',
      cursor: 'pointer',
      fontSize:'16px',
      maxWidth:'180px',
      [theme.breakpoints.down('sm')]:{
        display:'none',
      }
    },
}));