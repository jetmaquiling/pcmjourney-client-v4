import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
  }));


export default function Type2({ label='Undefined', field='Undefined', type="none", autoComplete="none", dispatch, value=null}) {
    const classes = useStyles();
    
    return (
        <div className={classes.formItem}>
            <KeyboardDatePicker
                clearable
                inputVariant="outlined"
                label={label}
                type='tel'
                onChange={(date)=> dispatch({
                    type:"ONCHANGE",
                    field: field,
                    payload: date
                })}
                value={value}
                format="MM/DD/yyyy"
                style={{width: "86%", display: 'inline-block'}}
            />
            <IconButton style={{width: "14%" ,display: 'inline-block'}}>
                    <HelpIcon style={{fontSize:'25px'}}/>
            </IconButton>
        </div>   

    )
}
