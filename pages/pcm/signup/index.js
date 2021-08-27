/* eslint-disable @next/next/link-passhref */
import React, {useReducer} from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import useStyles from '@/useStyles/signUpStyles';
import Type1 from '@/components/inputs/type1';
import Type2 from '@/components/inputs/type2';
import Type3 from '@/components/inputs/type3';
import Type4 from '@/components/inputs/type4';
import Type5 from '@/components/inputs/type5';
import Type6 from '@/components/inputs/type6';
import Click1 from '@/components/buttons/click1';
import TermsAndPolicy from '@/components/caveats/termsAndPolicy';
import { PoliciesComponent } from '@/components/dialogs/policies';
import {AuthContext} from '@/context/context';
import Head from 'next/head'
import { SuccessModalComponent } from '@/components/dialogs/success';


let new_date1 = moment();
let new_date2 = moment();
let new_date3 =moment();
let new_date4 =moment();

const initialState = {
    FirstName: '',
    LastName: '',
    Email: '',
    Spouse: '',
    Password: '',
    PasswordConfirm: '',
    Username: '',
    Purpose: '',
    BirthDate: new_date1 ,
    Contact: "", 
    Ranking: null, 
    ProfilePicture: '',
    ProfilePicturePreview: '',
    PersonalSignature: null ,
    Trained: 'untrained',
    Programs: '',
    country: "",  
    address: '' , 
    city:'', 
    zip: '' , 
    proof:'', 
    dateproof: new_date2, 
    upline1: '', 
    upline2: '' , 
    upline3:'', 
    Sponsor: '',
    PCMupline: '',
    Start: new_date3 , 
    End: new_date4 , 
    PersonalSignPreview: null, 
    PCMSignPreview: null,
    Agreement: false,
};


function reducer(state, action) {
    switch (action.type) {
      case 'ONCHANGE':
        return {
            ...state,
            [action.field]: action.payload
        };
      default:
        return;
    }
  }

export default function Signup () {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const ctx = React.useContext(AuthContext);

    React.useEffect(() => {
        let startDate = moment(state.Start);
        dispatch({
            type:"ONCHANGE",
            field:  "End",
            payload: startDate.add('90','days')
        });
        console.log("ADDING 90 Days")
      },[state.Start]);

   
    return (
        <div className={classes.root} >
            <Head>
                <title>Get Started with PCM Journey</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SuccessModalComponent/>
            <PoliciesComponent/>
            <div className={classes.backBox} >
                <Link href='/pcm'>
                    <IconButton>
                        <ArrowBackIcon className={classes.back} />
                    </IconButton>
                </Link>
            </div>

            <div className={classes.h2Box}   >
                <Typography variant="h2" className={classes.h2}>Get Started</Typography>
            </div>

            {/* Start Of FormBox */}
            <div className={classes.formBox} >


                <Typography variant="h6" className={classes.h6}>Personal Information</Typography>


                <Type1 label="First Name" type="name" field="FirstName" dispatch={dispatch} />
                <Type1 label="Last Name" type="name" field="LastName" dispatch={dispatch} />
                <Type2 label="Date Of Birth" type="date" field="BirthDate" dispatch={dispatch} value={state.BirthDate} />
                <Type1 label="Contact Number" type="tel" field="Contact" dispatch={dispatch} />
                <Type1 label="Email Address" type="email" field="Email" dispatch={dispatch} />
                <Type1 label="Spouse" type="name" field="Spouse" dispatch={dispatch} />
            
                <Typography variant="h6"  >Complete Address</Typography>
                <Type1 label="Country" field="country" dispatch={dispatch} />
                <Type1 label="House/Apartment, Street, Barangay" field="address" dispatch={dispatch} rows={5}/>
                <Type1 label="Province/City" field="city" dispatch={dispatch} />
                <Type1 label="Zip Code" field="zip" dispatch={dispatch} />

                <Type3 label1="Have you attended any training program in Network Building?" field1='Trained' type1="none" autoComplete="none" dispatch={dispatch} value1={state.Trained} label2="List The Training Programs:" field2='Programs' />



                <Typography variant="h6" className={classes.h6} >PHBWORX Account</Typography>
                <Type1 label="PHB Account Username" type="Username" field="Username" dispatch={dispatch} />
                <Type4 label="Present Ranking" type="name" field="Ranking" dispatch={dispatch} value={state.Ranking} items={["affiliates","gold","platinum","diamond","pearl"]}/>

                <Type5 label="Send Us Your Picture" type="image" field="ProfilePicture" previewfield="ProfilePicturePreview" dispatch={dispatch} picture={state.ProfilePicture}  preview={state.ProfilePicturePreview}/>


                <Typography variant="h6" className={classes.h6} >Proof of Activation</Typography>
                <Type1 label="First Purchase/Activation Ref. No." type="number" field="proof" dispatch={dispatch} />
                <Type2 label="Date Of Purchase" type="date" field="dateproof" dispatch={dispatch} value={state.dateproof} />

                <Typography variant="h6" >Name Three Active Uplines</Typography>
                <Type1 label="Upline #1" type="name" field="upline1" dispatch={dispatch} />
                <Type1 label="Upline #2" type="name" field="upline2" dispatch={dispatch} />
                <Type1 label="Upline #3" type="name" field="upline3" dispatch={dispatch} />


                <Typography variant="h6" className={classes.h6} >Nearest Upline/PCM Acknowledgement</Typography>
                <Type1 label="Sponsor's Username" type="name" field="Sponsor" dispatch={dispatch} />
                <Type1 label="Nearest PCM Upline Name" type="name" field="PCMupline" dispatch={dispatch} />
                <Type5 label="Post Your PCM Signature Here" type="image" field="PCMSignature" previewfield="PCMSignPreview" dispatch={dispatch} picture={state.PCMSignature}  preview={state.PCMSignPreview}/>


                <Typography variant="h6" className={classes.h6} >PCM Journey Online Survey</Typography>
                <Type1 label="Why Are You Enrolling For PCM?" field="Purpose" dispatch={dispatch} rows={5} />
                <Type2 label="Start Of Your PCM Journey" type="date" field="Start" dispatch={dispatch} value={state.Start} />
                <div className={classes.formItem} >
                <Typography  variant="body2" >End of your 90 Days PCM Journey</Typography>
                    <Typography variant="body1" >{`${state.End.format("MMMM DD, YYYY")}`}</Typography>
                </div> 
                
                <Type5 label="Post Your Signature Here" type="image" field="PersonalSignature" previewfield="PersonalSignPreview" dispatch={dispatch} picture={state.PersonalSignature}  preview={state.PersonalSignPreview}/>

                <Typography variant="h6" >Make a password for your PCM Journey Account</Typography>

                <Type6 label="Password" type="date" field="Password" dispatch={dispatch}  />
                <Type6 label="Confirm Password" type="date" field="PasswordConfirm" dispatch={dispatch}  />
                <TermsAndPolicy Agreement={state.Agreement} dispatch={dispatch} />
                <Click1 label="Proceed" action={()=> ctx.signUp(state) } />

        
            {/* End Of FormBox */}
            </div>

        </div>
    )
}