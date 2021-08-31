import React from 'react'
import '../styles/globals.css'
import theme from '@/useStyles/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import {MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import AuthContextProvider from '@/context/context';
import Signs from '@/components/dialogs/signs';
import Head from "next/head";



function MyApp({ Component, pageProps }) {

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AuthContextProvider>
          <ThemeProvider theme={theme}>
              <Head>

             
             
                  
                  
                  <link rel="apple-touch-icon" sizes="180x180" href="/Images/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png"/>
                  <link rel="manifest" href="/Images/site.webmanifest"/>
                
                  
            
              </Head>
              <Signs/>
              <Component {...pageProps} />
          </ThemeProvider>
      </AuthContextProvider>
      
    </MuiPickersUtilsProvider>
   
  )
}

export default MyApp
