import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
  }));


export default function Type3({label1="Undefined", field1='Undefined', type1="none", autoComplete="none", dispatch, value1=null,label2="Undefined", field2='Undefined', type3="none", }) {
    const classes = useStyles();
    return (
            <div className={classes.formItem} style={{textAlign:'center'}}>
                <FormControl component="fieldset">
                    <FormLabel style={{marginBottom: "20px"}} component="legend">{label1}</FormLabel>
                    <RadioGroup a
                    ria-label={label1} 
                    name={field1}
                    value={value1}
                    onChange={(e)=> dispatch({
                        type:"ONCHANGE",
                        field: field1,
                        payload: e.target.value
                    })} >
                        <FormControlLabel value='true' control={<Radio color='primary'/>} label="Yes" />
                        <FormControlLabel value='false' control={<Radio color='primary' />} label="No" />
                    </RadioGroup>
                </FormControl>
                
                {value1 === 'true' && 
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >{label2}</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>
                                    dispatch({
                                    type:"ONCHANGE",
                                    field: field2,
                                    payload: e.target.value
                                })}
                                multiline
                                rows={4}
                                type='text'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                }   

            </div>
                
    )
}