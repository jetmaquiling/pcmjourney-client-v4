import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {AuthContext} from '@/context/context';
const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
  }));


export default function TermsAndPolicy({dispatch, Agreement=false}) {
    const ctx = React.useContext(AuthContext);
    const classes = useStyles();



    return (
        <div className={classes.formItem} style={{textAlign: 'left',display:'flex',alignItems: "center"}}>
            <div  style={{display: 'inline-block'}}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={ctx.checked}
                        onClick={()=>{
                            if(ctx.checked){
                                ctx.setChecked(false)
                            }else{
                                ctx.setTerms(true)
                            }
                            
                        }}
                        color="primary"
                    />
                    }/>
            </div>
            <div style={{width: '80%' ,display: 'inline-block'}}>
                <Typography variant="caption" >I agree to the Privacy Policy, Terms And Conditions of <a href="https://phb2020.com">
                PHBWorx International</a>, <a href="https://ebuddy.ph">ebuddy.ph</a> and <a href="https://pcmjourney.com">PCM Journey.</a></Typography>
            </div>

        </div> 
    )
}
