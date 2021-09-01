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
import Click1 from '@/components/buttons/click1';
import TermsAndPolicy from '@/components/caveats/termsAndPolicy';
import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import LinkCreate from '../create';
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '@/config/configuration.json';
import axios from 'axios';


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

export default function LinkEdit () {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const ctx = React.useContext(AuthContext);
    const [link, setLink] = React.useState(false);
    const router = useRouter()
    
    const handleSubmit = async (form)  =>  { 
  
        if(state.firstname.length <= 2 || state.lastname.length <= 2){
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
          return ctx.handleToaster("Tell us WHY you're joining?","warning");
        }
        if(state.slug.length <= 2){
          return ctx.handleToaster("You Link Name is Invalid","warning");
        }
       
        ctx.setLoad(true)
        axios.put(`${config.SERVER_URL}/linkfunnels/${ctx.user.linkfunnels[0].id}`, {
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
                axios.delete(`${config.SERVER_URL}/upload/files/${ctx.user.linkfunnels[0].profilepicture.id}`).then(res=> console.log(res))
                const formData = new FormData()
                formData.append('files', state.profilepicture);
                formData.append('ref', 'linkfunnel');
                formData.append('refId', res.data.id);
                formData.append('field', 'profilepicture');

                axios.post(`${config.SERVER_URL}/upload/`,formData
                ).then(res => {
                    ctx.setLoad(false);
                    ctx.setModal({open: true, title: 'Congratulations, You Are Successful in Updating Link Booster', function: ()=>{ window.location.replace("/pcm/dashboard/link");}})
                    
                })
                ctx.setLoad(false);
                ctx.setModal({open: true, title: 'Congratulations, You Are Successful in Updating Link Booster', function: ()=>{ window.location.replace("/pcm/dashboard/link");}})
  
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


    

    React.useEffect(() => {
      
            try{
                if(!ctx.user.linkfunnels[0]){
                    setLink(true)
                    console.log(ctx.user.linkfunnels)
                }else{
                    console.log(ctx.user.linkfunnels[0].profilepicture)
                    dispatch({type:"ONCHANGE", field: "firstname", payload: ctx.user.linkfunnels[0].firstname});
                    dispatch({type:"ONCHANGE", field: "lastname", payload: ctx.user.linkfunnels[0].lastname});
                    dispatch({type:"ONCHANGE", field: "email", payload: ctx.user.linkfunnels[0].email});
                    dispatch({type:"ONCHANGE", field: "slug", payload: ctx.user.linkfunnels[0].slug});
                    dispatch({type:"ONCHANGE", field: "motto", payload: ctx.user.linkfunnels[0].motto});
                    dispatch({type:"ONCHANGE", field: "geocode", payload: ctx.user.linkfunnels[0].geocode});
                    dispatch({type:"ONCHANGE", field: "notificationcode", payload: ctx.user.linkfunnels[0].notificationcode});
                    dispatch({type:"ONCHANGE", field: "contact", payload: ctx.user.linkfunnels[0].contact});
                    dispatch({type:"ONCHANGE", field: "ebuddy", payload: ctx.user.linkfunnels[0].ebuddy});
                    dispatch({type:"ONCHANGE", field: "username", payload: ctx.user.linkfunnels[0].username});
                    dispatch({type:"ONCHANGE", field: "profilepicturepreview", payload: ctx.user.linkfunnels[0].profilepicture.url});
                    setLink(false)
                }
            }catch(error){
                console.log(error)
                setLink(true)
            }
        
      },[ctx.user.linkfunnels]);


        return (<div className={classes.root} >
            <Head>
                    <title>Link Booter Edit Information</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PoliciesComponent/>
            <div className={classes.backBox} >
                <Link href='/pcm/dashboard/link'>
                    <IconButton>
                        <ArrowBackIcon className={classes.back} />
                    </IconButton>
                </Link>
            </div>

           

            {/* Start Of FormBox */}
            <div className={classes.formBox} >


                <Typography variant="h6" className={classes.h6}>Edit Information</Typography>


                <Type7 value={state.firstname} label="First Name" type="name" field="firstname" dispatch={dispatch} />
                <Type7 value={state.lastname} label="Last Name" type="name" field="lastname" dispatch={dispatch} />
                <Type7 value={state.email} label="Email Address" type="name" field="email" dispatch={dispatch} />
                <Type7 value={state.slug} label="Link Name" type="name" field="slug" dispatch={dispatch} />
                <Type7 value={state.contact} label="Contact Number" type="name" field="contact" dispatch={dispatch} />
                <Type7 value={state.ebuddy} label="Ebuddy Link" type="name" field="ebuddy" dispatch={dispatch} />
                <Type7 value={state.username} label="PHBWorx Username" type="name" field="username" dispatch={dispatch} />
                

            
                <Type5 label="Profile Picture" type="image" field="profilepicture" previewfield="profilepicturepreview" dispatch={dispatch} picture={state.profilepicture}  preview={state.profilepicturepreview}/>
                <Type7 value={state.motto} label="Motto" type="name" field="motto" dispatch={dispatch} rows={8}/>

                <Click1 label="Save Changes" action={handleSubmit} />

        
            {/* End Of FormBox */}
            </div>

        </div>
    )
}