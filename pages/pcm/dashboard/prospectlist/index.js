/* eslint-disable @next/next/link-passhref */
import React, {useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import {AuthContext} from '@/context/context';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';

import config from '@/config/configuration.json';
import axios from 'axios';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Head from 'next/head'
import moment from 'moment';
import { useRouter } from 'next/router'

import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '20px 0px',
      minHeight: '100vh',
      width: '100%',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center', 
    },

    inputBox:{
        width: '50%',
        margin: '0px 10px 30px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },    
    },
    box:{
        width: '100%',
    },
    inputLabel:{
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox:{
        width: '100%',
    },
    formBox:{
        margin: '20px 0px'
    },
    itemBox:{
        padding: '10px 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px',
        },    
    },
    detailsButton:{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    contentButton:{
        
        marginTop: '20px',
        textAlign: 'center'
    },
    backBox:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },   
    },
    back:{
        fontSize: '50px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize:'30px'
        },    
    },
    
 }));


export default function ProspectList() {
    const classes = useStyles();
    const router = useRouter()
    const ctx = useContext(AuthContext);
    const [success, setSuccess] = React.useState(true)
    const [form, setForm] = React.useState({firstname: '',lastname:'', contact: '',email: '', geocode:'',notification: '', interest: ''});

   

    useEffect(() => {
       
        console.log("GETING NEW PRSOPECT")
        async function persist(jwt) { 
            //console.log("Persisting Log")
              const {data} = await axios.get(`${config.SERVER_URL}/users/${ctx.getCookie('id')}`, {
                headers: { Authorization: `Bearer ${jwt}` }
                });
              const json = await data;
              // setCookie('token',json.jwt,7);
              // console.log('success LogIn', data);
              ctx.setUser(data);
              try{
                ctx.setUser({...data, ProfilePicture : data.ProfilePicture.url})
              }catch(error){
                // console.log('No Profile Picture')
              }
              
              //console.log(json)
              // console.log('success LogIn', json.user);
      
          }
          if(!ctx.loggedIn){
            router.push("/pcm/login")
        }else{
            persist(ctx.getCookie('token'));
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    async function addProspect () {
        if(form.firstname.length <= 5 || form.lastname.length <= 5 ){
            return ctx.handleToaster("Atleast add The First Name and Last Name", "warning");
        }
        axios
        .post(`${config.SERVER_URL}/prospects`, {
        firstname: form.firstname,
        lastname: form.lastname, 
        contact: form.contact,
        email: form.email, 
        geocode: form.geocode,
        notification: form.notification, 
        interest: form.interest,
        createdAt: new Date(),
        users_permissions_user: ctx.user
    }, {
        headers: { Authorization: `Bearer ${ctx.getCookie("token")}` }
    }).then(res=>{
        setForm({firstname: '',lastname:'', contact: '',email: '', geocode:'',notification: '', interest: ''});
        setSuccess(!success)
        ctx.setModal({open:false})
        ctx.handleToaster("Your Prospect Is added on the list","success");
    }).catch(error => {
        console.log(error);
        ctx.handleToaster("Sorry. There Is A Problem.","error");
    })
    }


    async function deleteProspect (id) {
        axios
        .delete(`${config.SERVER_URL}/prospects/${id}`, {
        headers: { Authorization: `Bearer ${ctx.getCookie("token")}` }
    }).then(res=>{
        setSuccess(!success)
        ctx.handleToaster("Your Prospect Is Deleted on the list","success");
    }).catch(error => {
        console.log(error);
        ctx.handleToaster("Sorry. There Is A Problem.","error");
    })
    }
    
    



    return (
        <div>
            <Header1/>
            <div className={classes.root}>
            <Head>
                <title>My Prospect List</title>
            </Head>
            
            <div className={classes.backBox} >
                <Link href='/pcm/dashboard'>
                    <IconButton>
                        <ArrowBackIcon className={classes.back} />
                    </IconButton>
                </Link>
            </div>
            <div  className={classes.inputBox}>
            <Accordion color='primary'  >
                <AccordionSummary
                expandIcon={<AddIcon  color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div className={classes.inputLabel}>
                    <PersonAddIcon color="primary" style={{ margin: '0px 10px'}}/>
                    <Typography  color="primary" className={classes.heading}>Add Prospect</Typography>
                </div>
                
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.contentBox}>

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >First Name</InputLabel>
                                        <OutlinedInput
                                            onChange={(e)=>setForm({...form, firstname: e.target.value})}
                                            value={form.firstname}
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Last Name</InputLabel>
                                        <OutlinedInput
                                            onChange={(e)=>setForm({...form, lastname: e.target.value})}
                                            value={form.lastname}
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Email Address</InputLabel>
                                        <OutlinedInput
                                            value={form.email}
                                            onChange={(e)=>setForm({...form, email: e.target.value})}
                                            multiline
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Contact</InputLabel>
                                        <OutlinedInput
                                            value={form.contact}
                                            onChange={(e)=>setForm({...form, contact: e.target.value})}
                                            id="filled-adornment-email"
                                            type='tel'
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Interest</InputLabel>
                                        <OutlinedInput
                                            value={form.interest}
                                            onChange={(e)=>setForm({...form, interest: e.target.value})}
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div  className={classes.contentButton}>
                                <Button variant="contained" color="primary" onClick={addProspect} >
                                        ADD Prospect 
                                </Button>
                        </div>


                    </div>
                </AccordionDetails>
            </Accordion>
            </div>
             <Grid container className={classes.box}>
                    {ctx.user.prospects && ctx.user.prospects.map((person, index) => {
                        return(
                            <Grid key={index} item md={6}  xs={12} className={classes.itemBox}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon  color="primary" />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                        >
                                        <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={(event) => event.stopPropagation()}
                                            onFocus={(event) => event.stopPropagation()}
                                            control={<Checkbox color="primary" checked={false} />}
                                            label={`${person.firstname} ${person.lastname}`}
                                        />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{width: '100%'}}>
                                            <Typography color='primary' variant='h6'>
                                                First Name: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.firstname == "" ? "n/a" : person.firstname}
                                            </Typography>

                                            <Typography color='primary' variant='h6'>
                                                Last Name: 
                                            </Typography>

                                            <Typography variant='body1'>
                                                {person.lastname == "" ? "n/a" : person.lastname}
                                            </Typography>
                                            
                                            <Typography color='primary' variant='h6'>
                                                Email: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.email == "" ? "n/a" : person.email}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Contact: 
                                            </Typography>
                                            
                                            <Typography  variant='body1'>
                                                {person.contact == "" ? "n/a" : person.contact}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Interest: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.interest == "" ? "n/a" : person.interest}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Geolocation: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.geocode == "" ? "n/a" : person.geocode}
                                            </Typography>
                                            <br/>
                                            
                        
                                            <div className={classes.detailsButton}>
                                                <Button variant="outlined" color="primary" onClick={()=>{ctx.setModal({open:true, title: "Are You sure You want to permanently delete this user?",message: '', function: () => deleteProspect(person.id) }) } }>
                                                    Delete
                                                </Button>
                                                <div>
                                                    <Button style={{margin:'0px 5px', padding: '3px'}} variant="contained" href={`tel:${person.contact}`} color="primary" disabled={person.contact === ""}>
                                                        Call
                                                    </Button>
                                                    <Button  style={{margin:'0px 5px', padding: '3px'}} variant="contained" color="primary" href={`mailto:${person.email}`} disabled={person.email === ""} >
                                                        Email
                                                    </Button>
                                                    <Button style={{margin:'0px 5px', padding: '3px'}} variant="contained" href={`sms:${person.contact}`} color="primary" disabled={person.contact === ""}>
                                                        Message
                                                    </Button>
                                                </div>

                                               
                                            </div>
                                            
                                        </div>
                                        
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>


                        )
                        

                    })}
            
            </Grid>
          
        </div>
        <Footer1/>
        </div>
    );

}