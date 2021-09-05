/* eslint-disable @next/next/link-passhref */
import React, {useRouter} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PCMBlack from '@/public/Images/PCM Black.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import {AuthContext} from '@/context/context';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AlbumIcon from '@material-ui/icons/Album';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import Link from 'next/link'
import Image from 'next/image'


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    height: '10vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appButton1:{
    display: 'inline-block',
    margin: "0px 10px 0px 10px" ,
    [theme.breakpoints.down('xs')]: {
      display:'none',
      
    },
  },
  appButton:{
    color: '#000',
    display: 'inline-block',
    margin: "0px 10px 0px 10px" ,
    [theme.breakpoints.down('xs')]: {
      display:'none',
      
    },
  },
  flexBox:{
    display:'flex',
    
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
      justifyContent: 'space-between',
      
    },
    
  },
  navButton:{
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      
    },
  },
  flexItem:{

  },
  logoImage:{
    width: '10px',
    margin: '0px 0px 0px 10px'

  },
  profile:{
    width: '80%',
    display:'flex',
    justifyContent: 'left',
  },
  profileName:{
    width: '80%',
    display:'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'start',
      
    },
  },
  profileBox:{
    textAlign: 'center',
    marginLeft: '5px'
  },
  closeBox:{
    textAlign: 'right'
  },

  divider:{
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },

  profileText:{
    fontSize: '15px',
    margin: '0px 20px 0px 20px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 0px -10px 0px'
    },
  },
  profileTitle:{
   
    margin: '0px 20px 0px 20px',
    [theme.breakpoints.down('xs')]: {
      margin: '5px 0px 0px 0px'
    },
  },


  profilePictureSlide:{
    borderRadius: '5px',
    width: '100px',
    height: '100px',
  }


}));

export default function Header1 (){
  const classes = useStyles();
  const [log, setLog] = React.useState(false)
  const ctx = React.useContext(AuthContext);
  
  const [anchor, setAnchor] = React.useState(false);

  const toggleDrawer = () => {
    setAnchor(!anchor);
  };
  
  React.useEffect(() => {
    if (ctx.stateAuthenticated){
      setLog(true)
    }else{
      setLog(false)
    }
  },[ctx.stateAuthenticated])




  return (
    <div className={classes.root}  >
      <AppBar position="fixed" color='secondary' className={classes.head}  >

          <Toolbar className={classes.flexBox}  style={{display: (log && 'none') }} >

            <div >
              <Link href="">
                <a>
                  <Image alt="Logo" src={PCMBlack} width={70} height={70}  className={classes.logoImage}/>
                </a>
              </Link>
            </div>

            <div   >
              <Link href='/blogs'>
                  <Button  className={classes.appButton} >
                      Blogs
                  </Button>
              </Link>
              <Link href='/countdown'>
                  <Button  className={classes.appButton} >
                      About
                  </Button>
              </Link>
              <Link href='/support'>
                  <Button className={classes.appButton}>
                      Contact
                  </Button>
              </Link>
              <Link href='/login'>
                  <Button  className={classes.appButton} >
                      Log In
                  </Button>
              </Link>
              <Link href='/signup'>
                  <Button variant="contained" color="primary" className={classes.appButton1}>
                      Sign Up
                  </Button>
              </Link>
                <IconButton onClick={toggleDrawer} className={classes.navButton}>
                    <DehazeIcon style={{fontSize:'40px'}} />
                </IconButton>
                
            </div>
                 
          </Toolbar>

          <Toolbar className={classes.flexBox}  style={{display: (!log && 'none') }} >

            <div className={classes.profile} >
              <div className={classes.profileBox} >
                <IconButton style={{padding:'5px'}}>
                  <Avatar style={{width:'40px', borderRadius: '5px'}} className={classes.profilePicture} src={ctx.user.ProfilePicture}/>
                </IconButton>
              </div>
              <div className={classes.profileName} >
              <Typography variant="body1" className={classes.profileText}  >{ctx.user.firstName} {ctx.user.lastName}</Typography>
              <Typography variant="h3" className={classes.divider} >|</Typography>
              {
              (ctx.PCMday < 0) 
              ? 
             (
              <Typography variant="h6" className={classes.profileTitle}>Starting in {Math.abs(ctx.PCMday)} Days</Typography>) 
              : 
              (
              <Typography variant="h6" className={classes.profileTitle}>PCM Journey Day {ctx.PCMday}</Typography> 
              )

               }
             
              </div>
             
            </div>

            <div >
                <IconButton onClick={toggleDrawer}>
                    <DehazeIcon style={{fontSize:'40px'}}  />
                </IconButton>


              <Drawer style={{display: (!log && 'none') }} anchor={'right'} open={anchor} onClose={toggleDrawer} >
                  <div
                      role="presentation"
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                    >
                    <div className={classes.closeBox} > 
                      <IconButton  >
                          <CloseIcon style={{fontSize:'30px'}} />
                        </IconButton>
                      </div>
                    
                    <div className={classes.profileBox} >
                      <IconButton  >
                        <Avatar  className={classes.profilePictureSlide} src={ctx.user.ProfilePicture}/>
                      </IconButton>
                      <Typography variant="h6" style={{margin: '0px 20px 0px 20px'}} > {ctx.user.firstName} {ctx.user.lastName}</Typography>
                    </div>
                    <List className={classes.drawer}>
                      <Divider /> 
                      <Link href='/dashboard'>
                          <ListItem button >
                                <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"DashBoard"} /> 
                                <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                          </ListItem>
                      </Link>

                      <Link href='/countdown'>
                        <ListItem button >
                              <ListItemIcon><DirectionsWalkIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"PCM Online Link"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>


                      <Link href='/dashboard/link'>
                        <ListItem button >
                              <ListItemIcon><TrendingUpIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Link Booster"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <Link href='/dashboard/prospectlist'>
                        <ListItem button >
                              <ListItemIcon><FormatListNumberedIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"My Prospects"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      
                      <Link href='/dashboard/recordings'>
                        <ListItem button >
                              <ListItemIcon><AlbumIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"PCM Recordings"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <Link href='/support'>
                        <ListItem button >
                              <ListItemIcon><EmailIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Need Assistance?"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      

                      <Link href='/dashboard/settings'>
                        <ListItem button >
                              <ListItemIcon ><SettingsIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Settings"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <ListItem button onClick={()=> {ctx.setModal({open: true, title: 'Are You Sure You Want To Logout from the PCM Journey ?', function: ctx.logOut}) }} >
                              <ListItemIcon><ExitToAppIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Log Out"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                      </ListItem>

                       <Divider /> 
                    </List>
                  </div>
              </Drawer>


              <Drawer  style={{display: (log && 'none') }} anchor={'right'} open={anchor} onClose={toggleDrawer} >
                  <div
                      role="presentation"
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                    >
                    <div className={classes.closeBox} > 
                      <IconButton  >
                          <CloseIcon style={{fontSize:'30px'}} />
                        </IconButton>
                      </div>
                    
                    <div className={classes.profileBox} >
                        
                          <Image alt="logo" src={PCMBlack} width={100} height={100} className={classes.logoImage}/>
                        
                    </div>
                    <List className={classes.drawer}>
                      <Divider /> 
                      <Link href='/'>
                          <ListItem button >
                                <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Homepage"} /> 
                                <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                          </ListItem>
                      </Link>

                      <Link href='/countdown'>
                        <ListItem button >
                              <ListItemIcon><LiveHelpIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Why PCM Journey?"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <Link href='/support'>
                        <ListItem button >
                              <ListItemIcon><EmailIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Need Assistance?"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

  

                      <Link href='/about'>
                        <ListItem button >
                              <ListItemIcon><InfoIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"About Us"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <Link href='/login'>
                        <ListItem button >
                              <ListItemIcon ><ExitToAppIcon color="primary" /></ListItemIcon>
                              <ListItemText primary={"Log In"} /> 
                              <ArrowForwardIosIcon color="primary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>

                      <Link href='/signup'>
                        <ListItem button style={{backgroundColor: '#EC113E'}}>
                              <ListItemIcon ><HowToRegIcon color="secondary" /></ListItemIcon>
                              <ListItemText style={{color:'#fff'}}  primary={"Sign Up"} /> 
                              <ArrowForwardIosIcon color="secondary" style={{margin:'0px 0px 0px 30px'}} />
                        </ListItem>
                      </Link>


                       <Divider /> 
                    </List>
                  </div>
              </Drawer>
       
            </div>
                 
          </Toolbar>


        
      </AppBar>
    </div>
  );
}