import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        overflow: 'hidden'
    },
    firstSection:{
        margin: '80px 00px 200px 00px',
        [theme.breakpoints.down('xs')]: {
            margin: '80px 00px 50px 00px',
            
        },     
    },
    secondSection:{
        margin: '20px 0px 120px 0px'
    },
    thirdSection:{
        margin: '20px 0px 190px 0px'
    },

    title: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center"
        
    },
    buttonBox:{
        display: "flex",
        justifyContent:'center',
       
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '50px 20px 20px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        [theme.breakpoints.down('xs')]: {
            
            
          },        
    },
    appButton:{
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
    subtitleBox:{
        display: "flex",
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
    },
    subtitleItem:{
        width: '47rem',
        textAlign: "start",
        margin: '50px 20px 20px 20px',
        [theme.breakpoints.down('sm')]: {
            width: "90%",
          },
    },
    h1:{
        fontSize: '16rem',
        lineHeight:"16rem", 
        alignSelf:"center", 
        [theme.breakpoints.down('sm')]: {
            lineHeight:"12rem", 
            fontSize: '10rem',
          },
        [theme.breakpoints.down('xs')]: {
            lineHeight:"7.0rem", 
            fontSize: '4.6rem',
        },
    },
    h2Box:{
        margin: '25px auto 50px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            margin: '25px 20px 20px 20px ',
        },
    },
    h2:{
        letterSpacing: "-0px",
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        },
    },
    h4Box:{
        
        color: theme.palette.primary.main,
        width: "80rem",
        margin: '25px auto 50px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    h4num:{
        fontSize: '4.5rem',
        textAlign: 'center',
    },
    h41:{
        letterSpacing: "-2px",
        color: 'rgb(15, 15, 15)',
        fontSize: '4.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            letterSpacing: "-2x",
            fontSize: '3rem',
          },
    },
    h42:{
        letterSpacing: "-2x",
        color: "#EC113EB3",
        fontSize: '4.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            letterSpacing: "-2x",
            fontSize: '3rem',
          },
    },
    h43:{
        letterSpacing: "-2px",
        color: '#d4af37d5',
        fontSize: '4.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            letterSpacing: "-2x",
            fontSize: '3rem',
          },
    },
    h6Box:{
        width: "80rem",
        margin: 'auto',
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: "60rem",
          },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    h5:{
       
        width: "80rem",
        margin: 'auto auto 100px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    subtitle1:{
        
    },
    video:{
        display: "flex",
        justifyContent:'center',
        margin: '70px 20px 10px 20px',
        [theme.breakpoints.down('sm')]: {
            margin: '70px 0px 10px 0px',
            height:"auto",
          },
    },
    videoFrame:{
        width:"97rem" ,
        height:"47rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: '200px'
          },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
          
        
    },
    line1:{
        width: '0px',
         height: '170px' ,
         border: '1px solid rgb(15, 15, 15)' ,
         opacity: 1,
         margin: 'auto',
         borderTopLeftRadius: '100%',
         borderTopRightRadius: '100%',
         
    },
    line2:{
        width: '0px',
         height: '170px' ,
         border: '1px solid #EC113EB3' ,
         opacity: 1,
         margin: 'auto',
         borderTopLeftRadius: '100%',
         borderTopRightRadius: '100%',
         
    },
    line3:{
        width: '0px',
         height: '170px' ,
         border: '1px solid #d4af37d5' ,
         opacity: 1,
         margin: 'auto',
         borderTopLeftRadius: '100%',
         borderTopRightRadius: '100%',
         
    },
    
    circle1:{
        width: '59px',
        height: '58px',
        background: 'transparent linear-gradient(292deg, rgb(15, 15, 15) 0%, #F2E2E2 100%) 0% 0% no-repeat padding-box',
        borderRadius: '50%',
        margin: 'auto',

    },
    circle2:{
        width: '59px',
        height: '58px',
        background: 'transparent linear-gradient(292deg, #EC113E 0%, #F2E2E2 100%) 0% 0% no-repeat padding-box',
        borderRadius: '50%',
        margin: 'auto',

    },
    circle3:{
        width: '59px',
        height: '58px',
        background: 'transparent linear-gradient(292deg, #d4af37d5 0%, #F2E2E2 100%) 0% 0% no-repeat padding-box',
        borderRadius: '50%',
        margin: 'auto',

    },
    logoImage:{
        width: '300px',
        margin: '60px auto 10px auto'
    }
    
   




  }));
