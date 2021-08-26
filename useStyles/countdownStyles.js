import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        backgroundImage: `url("Images/background.jpg")` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '0px 0px 0px 0px',
        width: '100%',
        height: '200vh',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px 0px 0px',
            height: '120vh',
        },
    },
    title:{
        padding: '100px 10px 50px 10px', 
        fontSize: '40px',
        [theme.breakpoints.down('sm')]: {
            padding: '100px 5px 30px 5px', 
            fontSize: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '60px 15px 10px 15px',
        },
    },
    dateBox:{
        display: 'flex',
        justifyContent: 'center'
    },
    dateItem:{
        margin: '20px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
        },
    },
    dateText:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px'
        },
    },
    dateLabel:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    buttonBox1:{
        display: "flex",
        justifyContent:'center',
       
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '120px 20px 20px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        [theme.breakpoints.down('xs')]: {
           
            
          },        
    },
    appButton1:{
       width: '30rem',
       height: "6rem",
       margin: '100px 20px 20px 20px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '30rem',
            height: "5.5rem",
        },    
    },
    buttonBox2:{
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        margin: '100px 0px 0px 0px',
        [theme.breakpoints.down('sm')]: {
            margin: '60px 20px 20px 20px',
            justifyContent: 'center',
            
          },
        [theme.breakpoints.down('xs')]: {
            margin: '150px 5px 10px 5px',
            
          },        
    },
    appButton2:{
       width: '60rem',
       height: "6rem",
       margin: '0px 20px 20px 20px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: "5.5rem",
            margin: '5px 0px 20px 0px',
        },    
    },
}));