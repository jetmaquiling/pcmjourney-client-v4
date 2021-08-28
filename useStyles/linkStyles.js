import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardroot:{
        margin: '20px 0px',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: "90%",
          },
        [theme.breakpoints.down('xs')]: {
            width: "95%",
          },
    },
    backBox:{
        width: '100%',
        alignItems: 'flex-start'
    },
    back:{
        fontSize: '50px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize:'30px'
        },    
    },


  }));
  