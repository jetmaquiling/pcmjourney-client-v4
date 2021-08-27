import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const useStyles = makeStyles((theme) => ({
    box:{
        width: '100%',
        padding: '120px 0px 20px 0px' ,
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
    },
    content:{
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
    },
    link:{
        color: '#FF0000'
    },
    

}))


export default function TermsAndPolicies() {
    const myRef = React.useRef(null)
    const classes = useStyles();
    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])

    return (
        <div className={classes.box} ref={myRef}>
            <Head>
                <title>Terms and Policy Agreement</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={classes.content}>
            <Typography variant="h4">Privacy Policy for PCM JOURNEY ONLINE</Typography>

            <Typography variant="caption">At jetzrecords, accessible from https://jetzrecords.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by jetzrecords and how we use it.</Typography>

            <Typography variant="caption">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Typography>

            <Typography variant="caption"p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in jetzrecords. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info/">Privacy Policy Generator</a>.</Typography>
            <br/>
            <br/>
            
            <Typography variant="h4">Consent</Typography>
            <Typography variant="caption">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">Information we collect</Typography>
            <Typography variant="caption">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Typography>
            <Typography variant="caption">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Typography>
            <Typography variant="caption">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">How we use your information</Typography>

            <Typography variant="caption">We use the information we collect in various ways, including to:</Typography>

            <ul>
            <Typography variant="caption">Provide, operate, and maintain our website</Typography>
            <br/>
            <Typography variant="caption">Improve, personalize, and expand our website</Typography>
            <br/>
            <Typography variant="caption">Understand and analyze how you use our website</Typography>
            <br/>
            <Typography variant="caption">Develop new products, services, features, and functionality</Typography>
            <br/>
            <Typography variant="caption">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</Typography>
            <br/>
            <Typography variant="caption">Send you emails</Typography>
            <br/>
            <Typography variant="caption">Find and prevent fraud</Typography>
            </ul>
            <br/>
            <br/>
            <Typography variant="h4">Log Files</Typography>

            <Typography variant="caption">jetzrecords follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">Cookies and Web Beacons</Typography>

            <Typography variant="caption">Like any other website, jetzrecords uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</Typography>

            <Typography variant="caption">For more general information on cookies, please read <a href="https://www.privacypolicyonline.com/what-are-cookies/">"What Are Cookies"</a>.</Typography>
            <br/>
            <br/>

            <Typography variant="h4">Our Advertising Partners</Typography>

            <Typography variant="caption">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</Typography>
            <ul>
            <li>
            <Typography variant="caption">Google</Typography>
            <Typography variant="caption"><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></Typography>
            </li>
            </ul>
            <br/>
            <br/>
            <Typography variant="h4">Advertising Partners Privacy Policies</Typography>

            <Typography variant="caption">You may consult this list to find the Privacy Policy for each of the advertising partners of jetzrecords.</Typography>

            <Typography variant="caption">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on jetzrecords, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Typography>

            <Typography variant="caption">Note that jetzrecords has no access to or control over these cookies that are used by third-party advertisers.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">Third Party Privacy Policies</Typography>

            <Typography variant="caption">jetzrecords's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Typography>

            <Typography variant="caption">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">CCPA Privacy Rights (Do Not Sell My Personal Information)</Typography>

            <Typography variant="caption">Under the CCPA, among other rights, California consumers have the right to:</Typography>
            <Typography variant="caption">Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Typography>
            <Typography variant="caption">Request that a business delete any personal data about the consumer that a business has collected.</Typography>
            <Typography variant="caption">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</Typography>
            <Typography variant="caption">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">GDPR Data Protection Rights</Typography>

            <Typography variant="caption">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Typography>
            <Typography variant="caption">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Typography>
            <Typography variant="caption">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Typography>
            <Typography variant="caption">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Typography>
            <Typography variant="caption">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Typography>
            <Typography variant="caption">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Typography>
            <Typography variant="caption">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Typography>
            <Typography variant="caption">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>
            <br/>
            <br/>
            <Typography variant="h4">Children's Information</Typography>

            <Typography variant="caption">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Typography>

            <Typography variant="caption">jetzrecords does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Typography>


            </div>
            





                </div>

    );
}