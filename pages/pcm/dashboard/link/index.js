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
import Head from 'next/head'
import { useRouter } from 'next/router'
import LinkCreate from './create';


const initialState = {
   
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

export default function LinkDashboard () {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const ctx = React.useContext(AuthContext);
    const router = useRouter()
    const [link, setLink] = React.useState(false);

    React.useEffect(() => {
        if(!ctx.getCookie('isLoggedIn')){
            router.push("/pcm/login")
        }else{
            try{
                if(ctx.user.linkfunnels.length === 0){
                    setLink(true)
                }else{
                    setLink(false)
                }
            }catch{
                setLink(true)
            }
        }
        
      },[setLink,ctx]);

    if(link){
        return ( 
            <div>
                <Head>
                    <title>Create a Link Booster Account</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <LinkCreate/>
            </div>
        )
    }else{
        return (
            <div className={classes.root} >
                <Head>
                    <title>Link Booter DASHBOARD</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <PoliciesComponent/>
                <div className={classes.backBox} >
                    <Link href='/pcm/dashboard'>
                        <IconButton>
                            <ArrowBackIcon className={classes.back} />
                        </IconButton>
                    </Link>
                </div>
    
                {/* Start Of FormBox */}
                <Link href='/pcm/dashboard/link/edit'><Typography variant="h6" className={classes.h6}><a>Edit Information</a></Typography></Link>
    
            
    
            </div>
        )
    }
    
}