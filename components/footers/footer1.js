/* eslint-disable @next/next/link-passhref */
import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    box:{
        width: '100%',
        padding: '80px 0px 20px 0px' ,
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
    },
    content:{
        margin: '80px 50px 20px 50px' , 
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '50px 5px 20px 5px' , 
        },    
    },
    buttonSmall:{
        margin: '0px 0px 10px 0px'
    },

    

}))


export default function Footer1() {
    const classes = useStyles();
   
    return (
        <div className={classes.box} >
            
            <div className={classes.content}>
                <div className={classes.buttonSmall}>
                    
                    <Link href='https://www.youtube.com/channel/UCrCcVsRGOcJUt9P-gaF_v0w'>
                      <IconButton variant="contained" color='secondary' style={{float: 'right' , margin: '5px', backgroundColor: '#EC113E'}}>
                          <YouTubeIcon />
                      </IconButton>
                    </Link>

                    <Link href='https://www.facebook.com/OfficialPHBworx'>
                    <IconButton variant="contained" style={{float: 'right',backgroundColor: '#3b5998' ,color: '#fff', margin: '5px'}}>
                        <FacebookIcon/>
                    </IconButton> 
                    </Link>
                    <Link href='https://www.instagram.com/phbworxinternational/?hl=en'>
                    <IconButton variant="contained" style={{float: 'right',backgroundColor: '#fe4164' ,color: '#fff', margin: '5px'}}>
                        <InstagramIcon/>
                    </IconButton> 
                    </Link>

                    <Link href='https://www.linkedin.com/company/phbworx-gbd'>
                    <IconButton variant="contained" style={{float: 'right',backgroundColor: '#3b5998' ,color: '#fff', margin: '5px'}}>

                        <LinkedInIcon/>
                    </IconButton> 
                    </Link>
                </div>
            
                <Typography variant="caption">
                    &copy;Copyright JetzRecords.com 
                    <br/>
                    for PCM Journey Online Class
                    
                </Typography>
                <Link href='/backlinks' >
                    <Typography variant="caption">
                        Resources Used Are Found Here
                    </Typography>
                </Link>
                <Link href='/termsandpolicies' >
                    <Typography variant="caption">
                        Terms And Policies
                    </Typography>
                </Link> 
                <br/>

                <Typography variant="caption">
                    phbworxtechnical@gmail.com
                </Typography>
                
                
            </div>
            
            
            
        </div>
        
    );
}