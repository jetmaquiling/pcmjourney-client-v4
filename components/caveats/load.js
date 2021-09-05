/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import useStyles from '@/useStyles/404Styles';
import Link from 'next/link';
import Image from 'next/image';

export default function Loader() {
  const classes = useStyles();

  return (
      <div className={classes.root}  >
            <div style={{ width: '100%',height: '100vh',display: 'flex',textAlign: 'center',justifyContent: 'center',flexDirection: 'column',alignItems: 'center',
         }}>
            <Image alt="logo" src={"/Images/PCM Black.png"} height={120} width={120}/>
        </div>
      </div>
      
      
  );
}