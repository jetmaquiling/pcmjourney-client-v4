/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@material-ui/core';
import React, {useContext, useEffect} from 'react'
import Navigation from './navigation';
import Typography from '@material-ui/core/Typography';
import {AuthContext} from '@/context/context';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Login from '../login/index'

import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Dashboard () {
    const ctx = useContext(AuthContext);
    const myRef = React.useRef(null)
    const router = useRouter()


    React.useEffect(() => {
        
    
        scrollToRef(myRef);
        try{
            if(ctx.user.linkfunnels.length === 0){
                ctx.setModal({open: true, message: "You don't have a Link Booster account yet? Click proceed to create now!", function: ()=>{router.push('/dashboard/link/create')}})
            }
        }catch{
            
        }
    }, [])


   
    if(!ctx.stateAuthenticated){
        return (
            <div ref={myRef}>
                <Login/>
            </div>
        )
    }
    return (
            <div  ref={myRef} >
                 <Head>
                    <title>DASHBOARD - PCM JOURNEY ONLINE CLASS</title>
                </Head>
                <Header1/>
                <div  md={12} style={{padding: '50px 0px 0px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>
                       
                    <Typography variant='h3' color='primary'  ><b>Dashboard </b></Typography>
                </div>

                
                
                 <Navigation/>
                <Footer1/>
            </div>
        );
    
    
    
}