
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {AuthContext} from '@/context/context';




export function SuccessModalComponent() {
    const ctx = React.useContext(AuthContext);


  
  
  return (
            <Dialog
            style={{zIndex: 9999}}
            open={ctx.success.status}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Welcome To The PCM Online Class!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={ctx.logIn(ctx.success.email, ctx.success.password)} color="primary" autoFocus>
                Continue
            </Button>
            </DialogActions>
        </Dialog> 
  );
}