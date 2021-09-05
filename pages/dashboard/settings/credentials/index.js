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
import Type6 from '@/components/inputs/type6';
import Click1 from '@/components/buttons/click1';

import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '@/config/configuration.json';
import axios from 'axios';

import Login from './../../../login/index';



const initialState = {
    email: '',
    password: '',
    confirmpassword: '',
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
    
    const handleSubmit = async ()  =>  { 
        console.log(state.password.length)
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email))){
            return ctx.handleToaster("Your Email is Invalid","warning");
        }

        if (state.password.length <= 4 ){
            return ctx.handleToaster("Your Password is too short","warning");
        }
        if (state.password !== state.passwordconfirm){
            return ctx.handleToaster("Your Password in not the same","warning");
        }
       
        ctx.setLoad(true)
        axios.put(`${config.SERVER_URL}/users/${ctx.getCookie('id')}`, {
            email: state.email,
            password: state.password,
        }, {
            headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
            }).then(res => {
                    ctx.setLoad(false);
                    ctx.setModal({open: true, title: 'Congratulations, You Are Successful in Updating Your Account Credentials', function: ()=>{ window.location.replace("/dashboard");}})
  
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
                    dispatch({type:"ONCHANGE", field: "email", payload: ctx.user.email});
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
                    <title>Edit Login Information</title>
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


                <Typography variant="h6" className={classes.h6}>Edit Login Information</Typography>

                <Type7 value={state.email} label="Email Address" type="email" field="email" dispatch={dispatch} />
                <Type6 label="Password"  field="password" dispatch={dispatch}  />
                <Type6 label="Confirm Password"  field="passwordconfirm" dispatch={dispatch}  />

                <Click1 label="Save Changes" action={handleSubmit} />

        
            {/* End Of FormBox */}
            </div>

        </div>
    )
}