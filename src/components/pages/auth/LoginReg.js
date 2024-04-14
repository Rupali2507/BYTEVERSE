import React from 'react'
import { Grid, Card,Typography , Tabs , Tab, Box} from '@mui/material';
import b from '../../../assests/b.png'

const LoginReg = () => {
  return <>
  <Grid container sx={{height:"90vh"}}>
    <Grid item lg={7} sm={5} sx={{backgroundImage:`url(${b})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></Grid>
  
  
    <Grid item lg={5} sm={5} sx={{backgroundImage:`url(${b})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></Grid>
  </Grid>
  </>
}

export default LoginReg;
