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
                  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                  
                  
                  <link rel="apple-touch-icon" sizes="180x180" href="/Images/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png"/>
                  <link rel="manifest" href="/Images/site.webmanifest"/>
                  
                  <title>BYOB Build Your Online Business by Eduard Reformina</title>
                  <meta property="og:type"   content="website" />
                  <meta property="og:title" content="BYOB Build Your Online Business by Eduard Reformina"/>
                  <meta property="og:description"  content="THIS IS A TEST PAGE PLACE ANYTHING HERE!" />
                  <meta property="og:image" content='https://res.cloudinary.com/dnclv0tnh/image/upload/v1630401452/thumbnailsample_8aae97e6c8.png' key="ogimage" />
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
