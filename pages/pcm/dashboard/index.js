import { Grid } from '@material-ui/core';
import React, {useContext, useEffect} from 'react'
import Navigation from './navigation';
import Typography from '@material-ui/core/Typography';
import {AuthContext} from '@/context/context';
import { useRouter } from 'next/router'
import Head from 'next/head'


import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Dashboard () {
    const ctx = useContext(AuthContext);
    const myRef = React.useRef(null)
    const router = useRouter()


    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])


   
    if(!ctx.getCookie('isLoggedIn')){
        router.push("/pcm/login")
    }

    return (
            <div  ref={myRef} >
                 <Head>
                    <title>DASHBOARD - PCM JOURNEY ONLINE CLASS</title>
                </Head>
                <Header1/>
                <div  item md={12} style={{padding: '50px 0px 0px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>
                       
                    <Typography variant='h3' color='primary'  ><b>Dashboard </b></Typography>
                </div>

                
                
                 <Navigation/>
                <Footer1/>
            </div>
        );
    
}