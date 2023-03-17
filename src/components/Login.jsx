import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      
    <br>
    </br>
    <br></br>
    <Typography variant='h3' color='primary'>LOGIN TO FACEBOOK</Typography>
    <TextField label='Email' variant='outlined'/><br></br><br></br>
    <TextField label='Password' variant='outlined' type='password'/><br></br><br></br>
    <Button id='btn-log' type='submit' variant='filled'>Login</Button>
    </div>
  )
}

export default Login
