/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import useStyles from '@/useStyles/404Styles';
import Link from 'next/link';
import PCMLOGO from '@/public/Images/PCMLOGO.png';
import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';

export default function NotFound() {
  const classes = useStyles();

  return (
      <div className={classes.root}  >
           <Header1/>
                <div className={classes.main}>
                    <Typography variant="h5" >Oooooops...</Typography>
                    <Typography variant="h5" >That page cannot be found.</Typography>
                    <Typography variant="h5"  >Go back to the <Link href="/" style={{color:'EC113E'}}><a >Homepage</a></Link></Typography>
                </div>
            <Footer1/>
      </div>
      
      
  );
}