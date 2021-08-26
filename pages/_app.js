import React from 'react'
import '../styles/globals.css'
import theme from '@/useStyles/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import {MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import AuthContextProvider from '@/context/context';
import {AuthContext} from '@/context/context';
import Signs from '@/components/dialogs/signs';




function MyApp({ Component, pageProps }) {
  const ctx = React.useContext(AuthContext);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AuthContextProvider>
          <ThemeProvider theme={theme}>
            
              <Signs/>
              <Component {...pageProps} />
          </ThemeProvider>
      </AuthContextProvider>
      
    </MuiPickersUtilsProvider>
   
  )
}

export default MyApp
