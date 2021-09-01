import React, {useReducer} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextsmsIcon from '@material-ui/icons/Textsms';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';

import {AuthContext} from '@/context/context';
import  Button  from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px",
    maxWidth: 365,
    width: '100%',
    margin: '10px 0px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paragraph:{
      fontSize: "17px"
  }
}));

export default function LinkCard({thumbnail="/Images/background.jpg",link='No link', code="none",title="No Title", slug="none",author="No Author", description="No Description for this Post", target="No Target Information", information="No Information"}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const ctx = React.useContext(AuthContext);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(link)
    ctx.handleToaster("Link Copied", "success")
  }



  return (
    <Card className={classes.root}>
      <CardContent style={{padding: "10px", backgroundColor: '#EC113E'}}>
        <Typography variant="h5" color='secondary' >
            {title}
        </Typography>
        <Typography variant="caption" color='secondary' >
            developed by {author}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={thumbnail}
        title={description}
      />
      <CardContent style={{padding: "10px"}}>
        <Typography variant="body1" style={{fontSize: "18px", fontWeight: 700, lineHeight: '22px'}}>
          {description}
        </Typography>
        <div style={{overflow: 'hidden',margin: '10px 0px',backgroundColor: "#DEDEDE", padding: '5px 10px 5px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center'}}>
            <IconButton onClick={()=> window.location.replace(`/${slug}/${code}`)} style={{padding: '3px'}}>
                <LinkIcon color="primary"/>
            </IconButton>
            <Typography style={{fontSize: '13px'}}>
                {link}
            </Typography>
        </div>
       
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2">
         Click arrow to view
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
           <NavigationIcon color="primary"/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{padding: "10px"}}>
          
            <Button variant="contained" fullWidth style={{backgroundColor: '#4267B2', margin: '5px 0px'}} href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftestlinkbooster.netlify.app%2F${slug}%2f${code}%2f`}>
                <FacebookIcon color="secondary"/>
                <Typography variant="body2" style={{fontWeight: 700, lineHeight: '22px', color:'#fff', margin: '0px 10px'}}>
                   Share in Facebook
                </Typography>
            </Button>
            <Button variant="contained" fullWidth style={{backgroundColor: '#DB4437', margin: '5px 0px'}} href="mailto:">
                <EmailIcon color="secondary"/>
                <Typography variant="body2" style={{fontWeight: 700, lineHeight: '22px', color:'#fff',margin: '0px 10px'}}>
                   Share in Email
                </Typography>
            </Button>
            <Button variant="contained" color="primary" fullWidth style={{ margin: '5px 0px'}} onClick={copyCodeToClipboard}>
                <LinkIcon color="secondary"/>
                <Typography variant="body2" style={{fontWeight: 700, lineHeight: '22px', color:'#fff' ,margin: '0px 10px'}}>
                   Copy My Link
                </Typography>
            </Button>

          <Typography variant="h6" style={{marginTop: '20px'}} >Target Audience:</Typography>
          <Typography className={classes.paragraph}>
            {target}
          </Typography>
          <Typography variant="h6" style={{marginTop: '20px'}}>Information:</Typography>
          <Typography  className={classes.paragraph}>
            {information}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}