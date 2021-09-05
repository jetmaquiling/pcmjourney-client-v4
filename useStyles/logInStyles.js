import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    proceed:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '60px 0px 0px 0px',
          },
    },
    root: {
        width: '480px',
        margin: '20px auto 50px auto ',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            margin: '20px auto 50px auto ',
        },    
    },
    h2Box:{
        margin: '10px auto 50px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            margin: '30px auto 30px auto ',
        },    
    },
    h2:{
        [theme.breakpoints.down('xs')]: {
            fontSize:'70px'
        },    
    },
    backBox:{
       
    },

    back:{
        fontSize: '40px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize:'30px'
        },    
    },
    username:{
        fontSize: '140px'
    },
    formBox:{
        padding: '0px 40px 0px 40px',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 0px 0px 00px',
        },    
    },
    formItem:{
        margin: 'auto auto 20px auto',
        
    },
    formItemButton:{
        margin: '50px auto 20px auto', 
    },
    appButton:{
        height: '55px'
    }
  }));
  
