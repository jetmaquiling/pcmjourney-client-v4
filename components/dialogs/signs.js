//Modal and Crumbs
import React from 'react'
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {AuthContext} from '@/context/context';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

export default function Signs({dispatch, Agreement=false}) {
    const ctx = React.useContext(AuthContext);



    return (
        <div >
            {/* MODALS AND CRUMBS */}
            <Dialog
              open={ctx.modal.open}
              onClose={()=> {ctx.setModal({open: false})}} 
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{ctx.modal.title}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {ctx.modal.message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={()=> {ctx.setModal({open: false})}} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={()=> { ctx.modal.function(); ctx.setModal({open: false})  }} color="primary" autoFocus>
                    Proceed
                  </Button>
                </DialogActions>
              </Dialog>

              <Snackbar open={ctx.toaster.open} autoHideDuration={7000} onClose={ctx.handleClose}>
                      <Alert onClose={ctx.handleClose} severity={ctx.toaster.status}>
                          {ctx.toaster.message}
                      </Alert>
              </Snackbar>

              <Backdrop style={{zIndex: 9998}} open={ctx.load} >
                      <div style={{display:'flex', flexDirection: 'column',alignItems: 'center',textAlign: "center"}}>
                        <Typography color="secondary" variant="h6" >Please Stand By... </Typography>
                        <Typography color="secondary" variant="h6" >It Will Take A Few Minutes</Typography>
                        <CircularProgress color="secondary" />
                      </div>
                      
              </Backdrop>
        </div> 
    )
}
