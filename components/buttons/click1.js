import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
    formItemButton:{
        margin: '20px auto 20px auto', 
    },
  }));


export default function Click1({label="none" ,action }) {
    const classes = useStyles();
    
    return (
        <div className={classes.formItemButton}>
            <Button variant="contained" fullWidth color="primary" className={classes.appButton} onClick={()=> {action()}} >
                    <Typography variant="h5" >{label}</Typography>
                    <ArrowForwardIcon style={{fontSize: '30px'}}/>
            </Button>
        </div>
    )
}
