import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
  }));


export default function Type4({ label='Undefined', field='Undefined', type="none", autoComplete="none", dispatch, value=null, items=[] }) {
    const classes = useStyles();
    
    return (
        <div className={classes.formItem}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{width:'87%'}}>
                <InputLabel  id="demo-simple-select-outlined-label" >{label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={value}
                        label={label}
                        onChange={(e)=>
                            dispatch({
                            type:"ONCHANGE",
                            field: field,
                            payload: e.target.value
                        })}
                        >
                        {items.map((item, index)=>{
                            return (
                                <MenuItem key={index} value={item}>{item.toUpperCase()}</MenuItem>
                            )
                        }
                        )}
                    </Select>
            </FormControl>
            <IconButton edge="end">
                <HelpIcon style={{fontSize:'25px'}}/>
            </IconButton>
        </div>   

    )
}
