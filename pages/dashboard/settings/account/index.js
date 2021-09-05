/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import React, {useReducer} from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import useStyles from '@/useStyles/signUpStyles';
import Type7 from '@/components/inputs/type7';
import Type5 from '@/components/inputs/type5';
import Type2 from '@/components/inputs/type2';
import Click1 from '@/components/buttons/click1';

import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '@/config/configuration.json';
import axios from 'axios';

import Login from './../../../login/index';



const initialState = {
    firstName: '',
    lastName: '',
    Why: '',
    ProfilePicture: '',
    ProfilePicturePreview: '',
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

export default function LinkEdit () {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const ctx = React.useContext(AuthContext);
    const [link, setLink] = React.useState(false);
    const router = useRouter()
    
    const handleSubmit = async (form)  =>  { 
        console.log(state)
        if(state.firstName.length <= 1 || state.lastName.length <= 1){
            return ctx.handleToaster("Your Name is Invalid","warning");
        }
        if(state.Why.length <= 5){
          return ctx.handleToaster("Please Tell us WHY you're joining?","warning");
        }
       
        ctx.setLoad(true)
        axios.put(`${config.SERVER_URL}/users/${ctx.getCookie('id')}`, {
            firstName: state.firstName,
            lastName: state.lastName,
            Why: state.Why,
        }, {
            headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
            }).then(res => {
               
                if(state.ProfilePicture){
                    if(ctx.user.ProfilePicture){
                        axios.delete(`${config.SERVER_URL}/upload/files/${ctx.user.ProfilePicture.id}`).then(res=> console.log(res))
                    }
                     const formData = new FormData()
                    formData.append('files', state.ProfilePicture);
                    formData.append('ref', 'user');
                    formData.append('source', 'users-permissions');
                    formData.append('refId', ctx.getCookie('id'));
                    formData.append('field', 'ProfilePicture');
                    axios.post(`${config.SERVER_URL}/upload/`,formData).then(res => {

                        ctx.setLoad(false);
                        ctx.setModal({open: true, title: 'Congratulations, You Are Successful in Updating Your Account Information and Profile', function: ()=>{ window.location.replace("/dashboard");}})
                        
                    }).catch(error=>{
                        ctx.setLoad(false);
                        ctx.setModal({open: true, title: 'Sorry, something is wrong with your image. Please contact our support team!', function: ()=>{router.push('/support')}})
                    })
                   
      
                  //UPLOADING Profile IMAGE IN SERVER
                    
                // Handle success.
                // console.log('Well done!',response);
                // console.log('User profile', response.data.user);
                // console.log('User token', response.data.jwt);
                }else{
                    ctx.setLoad(false);
                    ctx.setModal({open: true, title: 'Congratulations, You Are Successful in Updating Your Account Information', function: ()=>{ window.location.replace("/dashboard/link");}})
                }
               

               
            
        })
        .catch(error => {
            //REGISTRATION FAILURE RESPONSE
            console.log(error);
            ctx.setLoad(false);
            ctx.setModal({open: true, title: 'Sorry, something is wrong. Please contact support!', function: ()=>{router.push('/support')}})
            
        });
  
    }


    

    React.useEffect(() => {
            ctx.authenticate();
            try{
                if(!ctx.user.linkfunnels[0]){
                    setLink(true)
                    console.log(ctx.user.linkfunnels)
                }else{
                    console.log(ctx.user)
                    dispatch({type:"ONCHANGE", field: "firstName", payload: ctx.user.firstName});
                    dispatch({type:"ONCHANGE", field: "lastName", payload: ctx.user.lastName});
                    dispatch({type:"ONCHANGE", field: "Why", payload: ctx.user.Why});
                    dispatch({type:"ONCHANGE", field: "ProfilePicturePreview", payload: ctx.user.ProfilePicture});
                    setLink(false)
                }
            }catch(error){
                console.log(error)
                setLink(true)
            }
        
      },[ctx.user]);

      if(!ctx.stateAuthenticated){
        return (
            <div >
                <Login/>
            </div>
        )
    }



        return (<div className={classes.root} >
            <Head>
                    <title>Account Information Settings</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PoliciesComponent/>
            <div className={classes.backBox} >
                <Link href='/dashboard/link'>
                    <IconButton>
                        <ArrowBackIcon className={classes.back} />
                    </IconButton>
                </Link>
            </div>

           

            {/* Start Of FormBox */}
            <div className={classes.formBox} >


                <Typography variant="h6" className={classes.h6}>Edit Account Information</Typography>

                <Type7 value={state.firstName} label="First Name" type="name" field="firstName" dispatch={dispatch} />
                <Type7 value={state.lastName} label="Last Name" type="name" field="lastName" dispatch={dispatch} />
                <Type7 value={state.Why} label="Why Join PCM Journey?" type="name" field="Why" dispatch={dispatch} />
                <Type5 label="Profile Picture" type="image" field="ProfilePicture" previewfield="ProfilePicturePreview" dispatch={dispatch} picture={state.ProfilePicture}  preview={state.ProfilePicturePreview}/>

                <Click1 label="Save Changes" action={handleSubmit} />

        
            {/* End Of FormBox */}
            </div>

        </div>
    )
}