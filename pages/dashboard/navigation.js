/* eslint-disable @next/next/link-passhref */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import EventIcon from '@material-ui/icons/Event';
import LinkIcon from '@material-ui/icons/Link';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Link from 'next/link';
import AlbumIcon from '@material-ui/icons/Album';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Image from 'next/image';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px 0px 0px 0px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px 0px 0px',
        },
    },

    rootItem:{
        padding: '30px 30px 30px 30px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 10px 60px 10px',
        },
    },
    noteBox:{
        margin: '0px 0px 0px 0px',
    },
    button:{
        padding: "10px",
        borderRadius: '0px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius:'10px',
        width: '100%',
        background: "linear-gradient(to right, #e43a15, #e65245)"
    },
    buttonitembox:{
        
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconButton:{
        color: theme.palette.secondary.light
    },
    textButton:{
        margin: '0px 10px 0px 10px',
        color: theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
    },
    arrowButton:{
        color: theme.palette.secondary.light
    },
    mainBox:{
        overflow:'hidden',
        width: "100%",
        maxHeight: '200px',
        display: 'flex', 
        justifyContent: 'space-between',
        backgroundColor: '#fff', 
        boxShadow: '0px 0px 15px #888888', 
        borderRadius: '5px',
        [theme.breakpoints.down('xs')]: {
            maxHeight: '120px',
        },
    },
    linkButton:{
        fontWeight: 'bold',
        color: "#e43a15",
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    textDescription:{
        fontFamily: 'Arial',
        fontSize: '15px',
        
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: "15px",
        },
    },
    textBox:{
        width: "55%",
        padding: '15px',
        overflow:'hidden',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
        },
    }


}));



export default function Navigation() {
    const classes = useStyles();
    
  return (
    <Grid   container className={classes.root}>
        

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>PCM Journey Class</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>Attend the PCM Journey Online Class during Monday 8pm</Typography>
                        <Link href="/countdown"><a><Typography className={classes.linkButton}>Enter Class Now </Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/classlink.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>

            
            
        </Grid>
        
        
        
        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>Class Recordings</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>Were you late in class? Don't worry we got you covered.</Typography>
                        <Link href="/dashboard/recordings"><a><Typography className={classes.linkButton}>Watch PCM Class</Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/watch.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>
        </Grid>

        

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>Prospect List</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>Having a list of prospects is important in lead generation and translates to profits.</Typography>
                        <Link href="/dashboard/prospectlist"><a><Typography className={classes.linkButton}>View Prospects</Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/prospectlist.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>
        </Grid>

        {/* <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >My Dreambook:</Typography>
                <Typography variant="body2" > Excuses are thieves that steal your dreams. Discouraging thoughts have the power to turn dreams into dust. The Dreambook is fitted with positive messages and reminders to free your mind from troubling roadblocks and bust bad influences for good. It’s like receiving pieces of advice from a trustworthy friend who can push you to ditch the things that hold you back and make you quit up on your goals.</Typography>
            </div>
            
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <LocalLibraryIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >My Dreambook</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
           
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >PCM Journey Task:</Typography>
                <Typography variant="body2" > Why should you do the PCM task? So you don’t waste time working out where you were, to get the wonderful glow when you know you’ve really completed a task,and to feel more in control of the pace of your success .So, in summary, if I complete more tasks I will have more time to do things I really want. It sounds so good from now I’m going to focus on completing tasks.</Typography>
            </div>
            
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <PlaylistAddCheckIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Journey Task</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
            
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Book Quiz:</Typography>
                <Typography variant="body2" > If there is one thing business books will do without fail it is to provide you with business acumen. They will teach you the common business concepts you need to be fluent in conversations with other business people. Reading widely will introduce you to concepts with which you are not yet familiar. </Typography>
            </div>
           
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <NotListedLocationIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Book Quiz</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>


        <Grid item md={6} className={classes.rootItem} d>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >PHBWorx Events:</Typography>
                <Typography variant="body2" > If you invest the time and money to attend a live event that offers value for your small business, you can almost guarantee that you will return home with new tools, valuable contacts and a renewed approach that will help you manage and grow your business better than before.</Typography>
            </div>
            
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <EventIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Attend PHBWorx Events</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Car Incentives Program:</Typography>
                <Typography variant="body2" > Inspiration awakens us to new possibilities by allowing us to transcend our ordinary experiences and limitations. Inspiration propels a person from apathy to possibility, and transforms the way we perceive our own capabilities. Inspiration may sometimes be overlooked because of its elusive nature.</Typography>
            </div>
           
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <DriveEtaIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Car Incentives Program</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>

 */}
        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>Link Booster</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>Boost your business with link booster technology!</Typography>
                        <Link href="/dashboard/link"><a><Typography className={classes.linkButton}>Start Inviting </Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/booster.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>   
        </Grid>
        
        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>Contact Us</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>We are here to help, just leave us a message, and we'll get back to you.</Typography>
                        <Link href="/support"><a><Typography className={classes.linkButton}>Request Help</Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/contact.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <div style={{display: "flex", alignItems: 'center' , marginBottom: '20px'}}>
                    <FiberManualRecordIcon color='primary' fontSize='small' />
                    <Typography variant="body1" style={{marginLeft: "10px" }}>My Settings</Typography>
                </div>
                
                <div className={classes.mainBox} >
                    <div  className={classes.textBox} >   
                        <Typography className={classes.textDescription}>Change your Accounbt settings, Link Booster Settings, etc...</Typography>
                        <Link href="/dashboard/settings"><a><Typography className={classes.linkButton}>Change Settings</Typography></a></Link>
                    </div>
                    <div style={{width: '45%', display: 'flex'}}>
                        <Image alt="Class Link"  src={'/Images/settings.JPG'}  width={300}  height={280}/>
                    </div>
                    

                    
                </div>
                
            </div>
        </Grid>


       




    </Grid>
  );
}