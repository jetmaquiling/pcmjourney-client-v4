/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import React, {useReducer} from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import useStyles from '@/useStyles/linkStyles';
import config from '@/config/configuration.json';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TermsAndPolicy from '@/components/caveats/termsAndPolicy';
import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import Head from 'next/head'
import { useRouter } from 'next/router'
import LinkCreate from './create';
import LinkCard from '@/components/cards/link';
import  Button  from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import qs from 'qs'
import Login from '../../login/index';
import Header1 from '@/components/headers/header1';
import Footer1 from '@/components/footers/footer1';

import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function LinkDashboard () {
    const classes = useStyles();
    const ctx = React.useContext(AuthContext);
    const router = useRouter()
    const [link, setLink] = React.useState(true);
    const [search, setSearch ] = React.useState("");
    const [funnels , setFunnels] = React.useState([]);
    const [success, setSuccess] = React.useState(true)


    React.useEffect(() => {
        ctx.authenticate()
        
        async function persistSearch() { 
            //console.log("Persisting Log")
                const query = qs.stringify({ _where: { _or:[{"title": search},{"author": search},{"link": search}, {"target": search},{"information": search}] } });
                const {data} = await axios.get(`${config.SERVER_URL}/funnelpages?${query}`);
                const json = await data;

                setFunnels(json)
      
          }

        async function persist() { 
            //console.log("Persisting Log")
                const {data} = await axios.get(`${config.SERVER_URL}/funnelpages`);
                const json = await data;

                setFunnels(json)
      
          }

        try{
            if(ctx.user.linkfunnels[0].slug){
                setLink(false)
            }
        }catch(error){
            console.log(error)
        }


        if(search){
            
            persistSearch();
        }else{
            persist()
        }
        
        
      },[success]);



    if(!ctx.stateAuthenticated){
        return (
            <div>
                <Login/>
            </div>
        )
    }

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
                    <Link href='/dashboard'>
                        <IconButton>
                            <ArrowBackIcon className={classes.back} />
                        </IconButton>
                    </Link>
                </div>
                <FormControl style={{maxWidth: '360px', margin: '30px 5px'}} className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                    <InputLabel >Search Links</InputLabel>
                    <OutlinedInput
                        onChange={(e)=> setSearch(e.target.value)}
                        value={search}
                        inputProps={{
                            autoComplete: false,
                        }}
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                setSuccess(!success)
                              }
                        }}
                        fullWidth
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={()=>setSuccess(!success)}>
                                <SearchIcon style={{fontSize:'25px'}} />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                {funnels[0] ? funnels.map((funnel,index)=>{
                    return (
                        <LinkCard
                            key={index}
                            thumbnail={funnel.thumbnail.url}
                            link={`https://testlinkbooster.netlify.app/booster/${ctx.user.linkfunnels[0].slug}`}
                            code={ctx.user.linkfunnels[0].slug}
                            title={funnel.title}
                            slug={funnel.link}
                            author={funnel.author}
                            description={funnel.subtitle}
                            target={funnel.target}
                            information={funnel.information}
                        />
                    );
                }) : 
                <h1> Nothing Found.</h1>
                }
                

                

              
            
                <Footer1/>
            </div>
        )
    
}