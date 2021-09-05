/* eslint-disable @next/next/link-passhref */
import React,{ useReducer, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '@/useStyles/supportStyles';
import Type1 from '@/components/inputs/type1';
import Click1 from '@/components/buttons/click1';
import Type4 from '@/components/inputs/type4';
import Type5 from '@/components/inputs/type5';
import axios from 'axios';
import config from '@/config/configuration.json';
import {AuthContext} from '@/context/context';

import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import Head from 'next/head'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const initialState = {
    CompleteName: '',
    Contact: '',
    Email: '',
    Assistance: '',
    Subject: '',
    Message: '',
    Picture: null,
    Preview: null
};


function reducer(state, action) {
    switch (action.type) {
      case 'ONCHANGE':
        return {
            ...state,
            [action.field]: action.payload
        };
      default:
        return;
    }
  }


export default function Support() {
    const classes = useStyles();
    const ctx = React.useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [success, setSuccess] = useState(false);



    const sendForm = async ()  =>  { 
        console.log(`${config.SERVER_URL}/requests`)
        console.log(state)
        if(!state.CompleteName){
            return ctx.handleToaster("Your Name is Invalid","warning");
        }
        if(!state.Contact){
            return ctx.handleToaster("Your Contact Number is Invalid","warning");
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.Email))){
            return ctx.handleToaster("Your Email is Invalid","warning");
        }
        if (state.Assistance === ""){
            return ctx.handleToaster("Please select the assistance you need.","warning");
        }
        if(state.Subject === ""){
            return ctx.handleToaster("Sorry. You don't have any subject.");
        }
        
  
        ctx.setLoad(true)
        await axios
            .post(`${config.SERVER_URL}/requests`, {
                name: state.CompleteName,
                contact: state.Contact,
                email: state.Email,
                assistance: state.Assistance,
                subject: state.Subject,
                message: state.Message,
            }).then(res => {
                console.log(`Success image Uploading now!`,res)
                //AUTHENTICATION SUCCESS RESPONSE
                //UPLOADING IMAGE IN SERVER
                if(state.Picture){
                    const formData = new FormData()
                    formData.append('files', state.Picture);
                    formData.append('ref','request')
                    formData.append('refId', res.data.id);
                    formData.append('field', 'attachment');
                    axios.post(`${config.SERVER_URL}/upload`, formData).then(request => {
                        console.log(request.ok)
                        setSuccess(true);
                    }).catch(error => {
                        console.log(error)
                        ctx.handleToaster("Sorry. We are having a Problem With Your Picture!","warning");
                        ctx.setLoad(false);
                    })
                }
                setSuccess(true);
                
  
            }).catch(error => {
            // Handle error.
            console.log(error);
            ctx.setLoad(false);
            ctx.handleToaster("Sorry. We are having a Problem With Your Message!","warning");

            });
  
            // Handle success.
            // console.log('Well done!',response);
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            
        
  
    }

    
    return (
        <div className={classes.main}>
            <Snackbar open={ctx.toaster.open} autoHideDuration={9000} onClose={ctx.handleClose}>
            <Alert onClose={ctx.handleClose} severity={ctx.toaster.status}>
                {ctx.toaster.message}
            </Alert>
            </Snackbar>
            <Dialog
                style={{zIndex: 9999}}
                open={success}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    PHBWORX INTERNATIONAL is processing your application.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>window.location.replace("/")} color="primary" autoFocus>
                    Continue
                </Button>
                </DialogActions>
            </Dialog>

            <div className={classes.box1} />
            

            <div className={classes.box2}>
                <div style={{display: 'flex', justifyContent: 'flex-start'}} >
                    <Link href='/'>
                        <IconButton>
                            <ArrowBackIcon className={classes.back} />
                        </IconButton>
                    </Link>
                </div>
                <div  className={classes.titleBox}>
                    <Typography style={{fontSize: '40px'}} variant='h2'>
                        Contact Us
                    </Typography>
                </div>


                <div className={classes.formBox}>
                    <Type1 label="Complete Name" type="name" field="CompleteName" dispatch={dispatch} />
                    <Type1 label="Contact Name" type="tel" field="Contact" dispatch={dispatch} />
                    <Type1 label="Email Address" type="email" field="Email" dispatch={dispatch} />
                    <Type4 label="Assistance" type="name" field="Assistance" dispatch={dispatch} value={state.Assistance} items={["PCM Journey Technical","eBuddy Technical","PHBWorx Phibi","PHBWorx Technical"]}/>
                    <Type1 label="Subject" type="name" field="Subject" dispatch={dispatch} />
                    <Type1 label="Message" type="name" field="Message" dispatch={dispatch} rows={8} />
                    <Type5 label="Send Us Your Picture" type="image" field="Picture" previewfield="Preview" dispatch={dispatch} picture={state.Picture}  preview={state.Preview}/>
                    <Click1 label="Send" action={sendForm} />
                </div>



            </div>
        </div>
    );
}