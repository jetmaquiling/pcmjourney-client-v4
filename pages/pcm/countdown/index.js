import React,{useContext} from 'react';
import useStyles from '@/useStyles/countdownStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Link from 'next/link';
import {AuthContext} from "@/context/context";



export default function Countdown() {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const [link, setLink] = React.useState(false);
    const [state, setState] = React.useState({
        days: 1,
        hours: 7,
        minutes: 0,
        seconds: 0,
    })

    // React.useEffect(() => {
    //     ctx.getEvents();
    //     console.log(ctx.events.PCMdate);
    //     const date = moment(ctx.events.PCMdate);
    //     console.log(date.format("MM DD YYYY, h:mm a"));
    //     setTime(date.format("MM DD YYYY, h:mm a"));
    //     console.log(time)
    // }, [])

    React.useEffect(() => {
        if(ctx.events.PCMdate){
            setInterval(() => {
                //ADD DATE HERE
                const date = moment(ctx.events.PCMdate);
                const then = moment(date.format("MM DD YYYY, h:mm a"), "MM DD YYYY, h:mm a");
                const now = moment();
                const countdown = moment(then - now);
                const days = countdown.format('D');
                const hours = countdown.format('HH');
                const minutes = countdown.format('mm');
                const seconds = countdown.format('ss');
                setState({ days, hours, minutes, seconds });
            }, 1000);
        }else{
            //PLACE REFRESH HERE
            const days = 1
            const hours = 7
            const minutes = 0 
            const seconds = 0
            setState({ days, hours, minutes, seconds });
        }
    }, [])

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText("COPY TEXT HERE")
        setLink(true)
      }

      
  return (
    <div className={classes.root} >
            <Typography variant='h5' className={classes.title} >PCM JOURNEY ONLINE CLASS IS STARTING IN: </Typography>
            <div className={classes.dateBox}>
                <div className={classes.dateItem}> 
                    <Typography variant='h2' className={classes.dateText}  >{Math.abs(1 - state.days)}</Typography>
                    <Typography variant='h3'  className={classes.dateLabel}  >DAYS</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{Math.abs(state.hours - 7)}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>HOURS</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{state.minutes}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>MINUTES</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{state.seconds}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>SECONDS</Typography>
                </div>

            </div>
                {/* PLACE CONDITIONAL HERE */}
            <div className={classes.buttonBox1} style={{display:ctx.loggedIn && 'none'}}>
                    <Link href='/pcm/signup'>
                        <Button variant="contained" color="primary" className={classes.appButton1} >
                            Sign Up
                        </Button>
                    </Link>
                    <Link href='/pcm/login'>
                        <Button variant="contained" color="secondary" className={classes.appButton1} >
                            LOG In
                        </Button>
                    </Link>
            </div>
                {/* PLACE CONDITIONAL HERE */}
            <div className={classes.buttonBox2} style={{display:!ctx.loggedIn && 'none'}}>
                    <a href={ctx.events.PCMlink} >
                        <Button variant="contained" color="secondary" className={classes.appButton2} >
                            <Typography variant='h6' color="primary"  >  Open Zoom Meeting Now</Typography>
                          
                        </Button>
                    </a>
                    {/* <Button onClick={copyCodeToClipboard} style={{backgroundColor: (link && '#79ce638e') }} variant="contained" color="secondary" className={classes.appButton2} >
                            {!link ? 'Click to Copy Invite Link' : "Link Is Copied"}
                    </Button> */}
            </div>


            
    </div>
  );
}