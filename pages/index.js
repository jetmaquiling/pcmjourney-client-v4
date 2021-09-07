/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import animation from '@/styles/animation.module.css';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import useStyles from '@/useStyles/landingPageStyles';
import Link from 'next/link';
import PCMLOGO from '@/public/Images/PCMLOGO.png';
import Image from 'next/image';
import Support from './support/index';
import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';
import Head from 'next/head';


const moment7 = moment();
const moment8 = moment().add('90','days');
export default function LandingPage () {
  const classes = useStyles();

  return (
      <div className={classes.root}  >
            <Head>
                <title>PCM Journey Online Class - "This journey is for those who want to go through a training that will give them a significant result in the end. Are you up for it?."</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:url" content="https://jetzrecords.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:description"        content="This journey is for those who want to go through a training that will give them a significant result in the end. Are you up for it?."/>
                <meta property="og:image"    content="/Images/thumbnail.jpg" />
            </Head>
           <Header1/>
          <div className={classes.firstSection} >
              <div className={classes.title} >
                  <Typography variant="h1" className={[classes.h1 , animation.animateTitle1].join(' ')} >THE</Typography>
                  <Typography variant="h1" className={[classes.h1 , animation.animateTitle2].join(' ')} >PCM</Typography>
                  <Typography variant="h1" className={[classes.h1 , animation.animateTitle3].join(' ')} >JOURNEY</Typography>
              </div>
              <div className={classes.buttonBox} >
                  <Link href='/signup'>
                      <Button variant="contained" color="primary" className={classes.appButton} >
                           <Typography variant="body1">SIGN UP</Typography>
                      </Button>
                  </Link>
                  <Link href='/login'>
                      <Button variant="outlined" color="primary" className={classes.appButton} >
                          <Typography variant="body1">LOG IN</Typography>
                      </Button>
                  </Link>
              </div>
          </div>

          <div className={classes.secondSection} >
              <div className={classes.h6Box} >
                  <Typography variant="h6" >&quot;The PCM Journey is for those who wants to go through a training that will give them a significant result in the end. The PCM Journey will give you a change of mindset and a confident spirit.&quot;</Typography>
                  <br/>
                  <br/>
                  <br/>
                  <Typography variant="h6" >-Chief Business Development Officer-</Typography>
              </div> 
              <div className={classes.video} >
                   <iframe className={classes.videoFrame}  src="https://www.youtube.com/embed/RxOz7TI1b7s" title="YouTube video player" frameBorder="0" allowFullScreen={true}></iframe>
              </div>     
          </div>   
        
          <div className={classes.h5} >
                  <LazyLoad height={50} once >
                      <Image src={PCMLOGO} className={classes.logoImage} height={200} width={200} />
                  </LazyLoad>
                  <Typography variant="h5" >EXPLORE THE PCM JOURNEY</Typography>
              </div> 
          <div className={classes.thirdSection} >
              
              <div className={classes.line1} />
              <div className={classes.circle1} >
                  <Typography variant="h4" className={classes.h4num} color="secondary"  >1</Typography>
              </div>
              <div className={classes.h4Box} >
                  <Typography variant="h4" className={classes.h41} >Decide</Typography>
              </div> 
              <div className={classes.h2Box} >
                  <Typography variant="h2" className={classes.h2} >Success Is A Decision</Typography>
              </div> 
              <div className={classes.subtitleBox}>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" >You cannot make progress without making decisions. You are only one decision from a totally different life. In the end, we only regret the chances we didn’t take and the decisions we waited to make. Today is {moment7.format('MMMM DD, YYYY')} If you decided to START the 90 Days PCM Journey NOW, on {moment8.format('MMMM DD, YYYY')} , You will finish the journey.</Typography>
                  </div>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" >It takes a level of self-love, of dedication and determination to live your greatest life. So, look within. Look at every area of your life and ask yourself these questions: Will I be on the journey? Will I improve my mentality, emotions and decision-making? Anything that is blocking that, anything that is preventing you from living your greatest life, make the tough decision to let it go.</Typography>
                  </div>
              </div>
          </div>
          <div className={classes.thirdSection} >
              
              <div className={classes.line2} />
              <div className={classes.circle2} >
                  <Typography variant="h4" className={classes.h4num} color="secondary" >2</Typography>
              </div>
              <div className={classes.h4Box} >
                  <Typography variant="h4" className={classes.h42} >Learn</Typography>
              </div> 
              <div className={classes.h2Box} >
                  <Typography variant="h2" className={classes.h2}>Be A Student Of Success</Typography>
              </div> 
              <div className={classes.subtitleBox}>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" className={classes.subtitle1}  >Being a student is easy. Learning requires actual work. The more that you read, the more things you will know. The more that you learn, the more places you’ll go. The beautiful thing about learning is that nobody can take it away from you.</Typography>
                  </div>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" >No one can become perfect in just one day. Only Practice makes a man perfect. But now the phrase is changed; only perfect practice makes the difference. You must strive for progress and not perfection. Progress happens with more and more practice. You need a lot of practice to master something in this journey.</Typography>
                  </div>
              </div>
          </div>
          <div className={classes.thirdSection} >
              <div className={classes.line3} />
              <div className={classes.circle3} >
                  <Typography variant="h4" className={classes.h4num} color="secondary"  >3</Typography>
              </div>
              <div className={classes.h4Box} >
                  <Typography variant="h4"  className={classes.h43}>Succeed</Typography>
              </div> 
              <div className={classes.h2Box} >
                  <Typography variant="h2" className={classes.h2}>Unlocking The Success In You</Typography>
              </div> 
              <div className={classes.subtitleBox}>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" >Create a Positive Environment,  Celebrate Your Small Wins and Surround Yourself With Motivated People. There are people who make things happen, there are people who watch things happen, and there are people who wonder what happened. To be successful, you need to be the person who makes things happen.</Typography>
                  </div>
                  <div className={classes.subtitleItem}>
                  <Typography variant="subtitle1" >There are no secrets to success. It is the result of preparation, hard work, and learning from failure. If you really want to do something, youll find a way. If you dont, youll find an excuse. In order to succeed,  first, believe that you can  succeed.</Typography>
                  </div>
              </div>
          </div>
          <Support/>

          <Footer1/>
      </div>
      
      
  );
}