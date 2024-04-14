import {TextField, Button, Box, Alert} from '@mui/material';
import { NavLink } from 'react-router-dom';

const UserLogin = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualdata = {
      email: data.get('email'),
      password: data.get('password'),
    }
    //console.log(actualdata);
    if(actualdata.email && actualdata.password){
      
    }
  }
  return <>
  <Box component = 'form' noValidate sx = {{mt: 1}} id='login-form' onSubmit={handleSubmit}>
   
  <TextField margin='normal' required fullWidth id='email' name='email' Label='Email Address' />

  <TextField margin='normal' required fullWidth id='password' name='password' Label='Password' type='password' />
  
  <Box textAlign='center'>
    <Button type='submit' variant='contained' sx={{mt:3, mb:2, px: 5}}>Login</Button>
  </Box>
  <NavLink to= '/'>Forgot Password?</NavLink>
  </Box>
  </>;
  };

  
export default UserLogin