/* eslint-disable @next/next/link-passhref */
import React, {useReducer , useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import useStyles from '@/useStyles/signUpStyles';
import Type7 from '@/components/inputs/type7';
import Type5 from '@/components/inputs/type5';
import Click1 from '@/components/buttons/click1';
import TermsAndPolicy from '@/components/caveats/termsAndPolicy';
import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import axios from 'axios';
import config from '@/config/configuration.json'
import { SuccessModalComponent } from '@/components/dialogs/success';
import { useRouter } from 'next/router'
import Login from '../../../login/index'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    slug: '',
    motto: '',
    contact: "", 
    geocode: '', 
    profilepicture: '',
    profilepicturepreview: '',
    ebuddy: '',
    notificationcode: '',
    username:'',
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

export default function LinkCreate () {
    const router = useRouter()
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const ctx = React.useContext(AuthContext);


    React.useEffect(() => {
        if(!ctx.getCookie("isLoggedIn")){
            router.push("/login")
        }


        window.navigator.geolocation.getCurrentPosition(showPosition);
    
        window.onbeforeunload = function() {
            alert("Are You sure to exit? All your data will be erased.")
            //if we return nothing here (just calling return;) then there will be no pop-up question at all
            //return;
        };
        
      });
    

    
    function showPosition(position) {
        dispatch({
            type:"ONCHANGE",
            field: "geocode",
            payload: `{latitude:${position.coords.latitude}, longitude:${position.coords.longitude}}`
        })
    }



    const handleSubmit = async (form)  =>  { 


  
        if(state.firstname.length <= 1 || state.lastname.length <= 1){
            return ctx.handleToaster("Your Name is Invalid","warning");
        }
        if(state.contact.length <= 9){
            return ctx.handleToaster("Your Contact Number is Invalid","warning");
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email))){
            return ctx.handleToaster("Your Email is Invalid","warning");
        }
        if(state.username.length <= 5 || state.ebuddy.length <= 2){
            return ctx.handleToaster("Your Account is Invalid","warning");
        }
        if(state.motto.length <= 5){
          return ctx.handleToaster("Tell us you Motto?","warning");
        }
        if(state.slug.length <= 2){
          return ctx.handleToaster("You Link Name is Invalid","warning");
        }
        if (!ctx.checked){
            return ctx.handleToaster("Please Agree to the Terms And Agreements","warning");
        }
       
        ctx.setLoad(true)
        axios.post(`${config.SERVER_URL}/linkfunnels`, {
            firstname: state.firstname,
            lastname: state.lastname,
            contact: state.contact,
            email: state.email,
            username: state.username,
            geocode: state.geocode,
            motto: state.motto,
            ebuddy: state.ebuddy,
            slug: state.slug,
            users_permissions_user: ctx.user.id
        }, {
            headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
            }).then(res => {
                //AUTHENTICATION SUCCESS RESPONSE
                //UPLOADING IMAGE IN SERVER
                    if( state.profilepicture){
                        const formData = new FormData()
                        formData.append('files', state.profilepicture);
                        formData.append('ref', 'linkfunnel');
                        formData.append('refId', res.data.id);
                        formData.append('field', 'profilepicture');
      
                        axios.post(`${config.SERVER_URL}/upload/`,formData
                        ).then(res => {
                          ctx.setLoad(false);
                          ctx.setModal({open: true, title: 'Congratulations, You Are Successful in making a Link Booster', function: ()=>{ window.location.replace("/dashboard/link");}})
                          
                        })
                    }
                    ctx.setLoad(false);
                    ctx.setModal({open: true, title: 'Congratulations, You Are Successful in making a Link Booster', function: ()=>{ window.location.replace("/dashboard/link");}})
  
              //UPLOADING Profile IMAGE IN SERVER
                
            // Handle success.
            // console.log('Well done!',response);
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            
        })
        .catch(error => {
            //REGISTRATION FAILURE RESPONSE
            console.log(error);
            ctx.setLoad(false);
            ctx.setModal({open: true, title: 'Sorry, something is wrong. Please contact support!', function: ()=>{router.push('/support')}})
            
        });
  
    }
    
    if(!ctx.stateAuthenticated){
        return (
            <div >
                <Login/>
            </div>
        )
    }
  
   
    return (
        <div className={classes.root} >
            <SuccessModalComponent/>
            <PoliciesComponent/>
            <div className={classes.backBox} >
                <Link href='/dashboard'>
                    <IconButton>
                        <ArrowBackIcon className={classes.back} />
                    </IconButton>
                </Link>
            </div>

            {/* Start Of FormBox */}
            <div className={classes.formBox} >


                <Typography variant="h6" className={classes.h6}>Create LINK BOOSTER</Typography>


                <Type7 value={state.firstname} label="First Name" type="name" field="firstname" dispatch={dispatch} />
                <Type7 value={state.lastname} label="Last Name" type="name" field="lastname" dispatch={dispatch} />
                <Type7 value={state.email} label="Email Address" type="name" field="email" dispatch={dispatch} />
                <Type7 value={state.slug} label="Link Name" type="name" field="slug" dispatch={dispatch} />
                <Type7 value={state.contact} label="Contact Number" type="name" field="contact" dispatch={dispatch} />
                <Type7 value={state.ebuddy} label="Ebuddy Link" type="name" field="ebuddy" dispatch={dispatch} />
                <Type7 value={state.username} label="PHBWorx Username" type="name" field="username" dispatch={dispatch} />
                

            
                <Type5 label="Profile Picture" type="image" field="profilepicture" previewfield="profilepicturepreview" dispatch={dispatch} picture={state.profilepicture}  preview={state.profilepicturepreview}/>
                <Type7 value={state.motto} label="Motto" type="name" field="motto" dispatch={dispatch} rows={8}/>

                <TermsAndPolicy Agreement={state.agreement} dispatch={dispatch} />

                <Click1 label="Confirm" action={handleSubmit} />

        
            {/* End Of FormBox */}
            </div>

        </div>
    )
}