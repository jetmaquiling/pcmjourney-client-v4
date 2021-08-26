import React ,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
  }));


export default function Type8({ label='Undefined', field='Undefined', type="none", autoComplete="none", setForm }) {
    const classes = useStyles();

    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classes.formItem}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                <InputLabel  >{label}</InputLabel>
                    <OutlinedInput
                        onChange={(e)=> setForm(e)}
                        inputProps={{
                            autoComplete: 'none',
                        }}
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            <IconButton edge="end">
                                <HelpIcon style={{fontSize:'25px'}}/>
                            </IconButton>
                        </InputAdornment>
                        }
                    />
            </FormControl>
        </div>
    )
}