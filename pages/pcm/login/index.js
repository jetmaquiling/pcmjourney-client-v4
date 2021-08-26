/* eslint-disable @next/next/link-passhref */
import React,{useContext, useEffect} from 'react'
import useStyles from '@/useStyles/logInStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import Click1 from '@/components/buttons/click1';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
import { useRouter } from 'next/router'
import {AuthContext} from '@/context/context';
import { makeStyles } from '@material-ui/core/styles';


import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



export default function Login () {
    const router = useRouter()
    const classes = useStyles();
    const myRef = React.useRef(null)
    const ctx = React.useContext(AuthContext);
    const [form, setForm] = React.useState({email: '', password: ''});
    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
        
      };
    
    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])

    React.useEffect(() => {
        if (ctx.getCookie('isLoggedIn')) {
          router.push('/pcm/dashboard')
        }
      })
    
 
    return (
            <div className={classes.root} ref={myRef}>
                
                <div className={classes.backBox} >
                    <Link href='/pcm'>
                        <IconButton>
                            <ArrowBackIcon className={classes.back} />
                        </IconButton>
                    </Link>
                </div>

                <div className={classes.h2Box} >
                    <Typography variant="h2" className={classes.h2}>Log in</Typography>
                </div>

                <div className={classes.formBox} >
                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel >Email Address</InputLabel>
                            <OutlinedInput
                                onChange={(e)=> setForm({...form, email: e.target.value })}
                                type="email"
                                inputProps={{
                                    autoComplete: "none",
                                }}
                                
                                fullWidth
                                multiline
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}} />
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    
                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel  >Password</InputLabel>
                                <OutlinedInput
                                    onChange={(e)=> setForm({...form, password: e.target.value })}
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
                   

                    
                    <div className={classes.formItemButton}>

                        <Click1 label="Continue" action={ctx.logIn(form.email,form.password)} />
                        <div style={{display:'flex', justifyContent:'space-between',marginTop: '10px'}}>
                            <div>
                                <Link href='/support'>
                                    <Typography variant="subtitle2" >forgot password? </Typography>
                                </Link>
                            </div>
                            <div>
                                <Link href='/pcm/signup'>
                                    <Typography variant="subtitle2" >Don't have an account yet? </Typography>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                        
                
                </div>



            </div>
        );
}