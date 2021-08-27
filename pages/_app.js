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
                  <script src="//widget.manychat.com/100398772332381.js" defer="defer"></script>
                  <script src="https://mccdn.me/assets/js/widget.js" defer="defer"></script>
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  <script>
                    window.OneSignal = window.OneSignal || [];
                    OneSignal.push(function() {
                      OneSignal.init({appId: "8e6d470b-2a2a-409c-92a8-844e4c020e14",safari_web_id: "web.onesignal.auto.50fac9c2-9f7f-49e4-88a1-4637f1759b35",
                      notifyButton: {
                          enable: true,
                        },
                      })
                    });
                  </script>
                  
                  <link rel="apple-touch-icon" sizes="180x180" href="/Images/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png"/>
                  <link rel="manifest" href="/Images/site.webmanifest"/>
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
              <Signs/>
              <Component {...pageProps} />
          </ThemeProvider>
      </AuthContextProvider>
      
    </MuiPickersUtilsProvider>
   
  )
}

export default MyApp
