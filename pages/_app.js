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
  React.useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "7f1dfe71-119f-4647-be29-327a2a4dfe9f",
            safari_web_id: "web.onesignal.auto.50d89199-747f-4818-96ca-50d4208129fc",
            notifyButton: {
                enable: true,
            },

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
    }, []); // <-- run this effect once on mount

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AuthContextProvider>
          <ThemeProvider theme={theme}>
              <Head>
                
                  <script src="//widget.manychat.com/100398772332381.js" defer="defer"></script>
                  <script src="https://mccdn.me/assets/js/widget.js" defer="defer"></script>
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  <script
                    src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
                    async=""
                  ></script>
                  
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
