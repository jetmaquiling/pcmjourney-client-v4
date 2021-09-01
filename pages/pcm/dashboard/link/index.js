/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import React, {useReducer} from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import useStyles from '@/useStyles/linkStyles';
import Type7 from '@/components/inputs/type7';
import Type5 from '@/components/inputs/type5';
import Click1 from '@/components/buttons/click1';
import TermsAndPolicy from '@/components/caveats/termsAndPolicy';
import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import Head from 'next/head'
import { useRouter } from 'next/router'
import LinkCreate from './create';
import LinkCard from '@/components/cards/link';
import  Button  from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';


export default function LinkDashboard () {
    const classes = useStyles();
    const ctx = React.useContext(AuthContext);
    const router = useRouter()
    const [link, setLink] = React.useState(false);
    const [code, setCode] = React.useState("");



    React.useEffect(() => {
        if(!ctx.getCookie('isLoggedIn')){
            router.push("/pcm/login")
        }else{
            try{
                if(ctx.user.linkfunnels.length === 0 && ctx.user.linkfunnels[0].slug){
                    setLink(true)
                }else{
                    setCode(ctx.user.linkfunnels[0].slug)
                    setLink(false)
                }
            }catch{
                setLink(true)
            }
        }
        
      },[setLink,ctx]);
    
    if(link){
        return ( 
            <div>
                <Head>
                    <title>Create a Link Booster Account</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <LinkCreate/>
            </div>
        )
    }

    return (
            <div className={classes.root} >
                <Head>
                    <title>Link Booter DASHBOARD</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <Header1/>
                <div className={classes.backBox} >
                    <Link href='/pcm/dashboard'>
                        <IconButton>
                            <ArrowBackIcon className={classes.back} />
                        </IconButton>
                    </Link>
                </div>
                <Link href="/pcm/dashboard/link/edit">
                    <Button variant="contained"  style={{backgroundColor: '#DB4437', marginBottom: '30px'}} >
                        <EditIcon color="secondary"/>
                        <Typography variant="body2" style={{fontWeight: 700, lineHeight: '22px', color:'#fff',margin: '0px 10px'}}>
                            Edit Link Booster
                        </Typography>
                    </Button>
                </Link>
                
                <LinkCard
                    thumbnail="/Images/background.jpg"
                    link={`https://testlinkbooster.netlify.app/${code}`}
                    code={code}
                    title='C2B Plan'
                    slug="c2b"
                    author="PHBWorx International"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    target="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    information="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />

              
            
                <Footer1/>
            </div>
        )
    
}