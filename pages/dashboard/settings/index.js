/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Link from 'next/link';
import PCMLOGO from '@/public/Images/PCMLOGO.png';
import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';
import Image from 'next/image';
import Head from "next/head";
import Click1 from "@/components/buttons/click1";
import { useRouter } from 'next/router'



import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    main:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '60px 0px 0px 0px',
          },
    },


  }));




export default function NotFound() {
  const classes = useStyles();
  const router = useRouter()
  return (
      <div className={classes.root}  >
            <Head>
                <title>Settings</title>
            </Head>
           <Header1/>
                <div className={classes.main}>
                    <Link href="/" ><a><Image src={"/Images/PCM Black.png"} height={90} width={90}/></a></Link>
                    <Click1 label="Change Account Settings " action={()=> router.push('/dashboard/settings/account')} />
                    <Click1 label="Change LogIn Settings" action={()=> router.push('/dashboard/settings/credentials')} />
                    <Click1 label="Change Link Booster Settings" action={()=> router.push('/dashboard/link/edit')} />
                </div>
            <Footer1/>
      </div>
      
      
  );
}