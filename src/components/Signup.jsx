import { Button, TextField, Typography } from '@mui/material'

import React from 'react'


const Signup = () => {
  return (
    <div>
        {/* <h3>Create a New Account</h3><br></br> */}
        {/* <h4>it's quick and easy</h4> */}
        {/* <input type="text" placeholder="first name"  name="" id=""/> 
        <input type="text" placeholder="surname" name="" id="" />
        <input type="number" placeholder="phone number" name="" id=""/>
        <input type="text" placeholder="email address" name="" id=""/>
        <input type="password" placeholder="password" name="" id=""/>
        <button type="submit">Signup</button>
        <br></br>
  <br></br>*/}
        <Typography variant='h3' color='primary'>Create an Account</Typography><br></br><br></br>
        {/* <Typography variant='h4' color='secondary'>it's quick and easy</Typography><br></br> */}
        <TextField label='firstname' variant='outlined'/><br></br><br></br>
        <TextField label='secondname' variant='outlined'/><br></br><br></br>
        <TextField label='Phone number' variant='outlined'/><br></br><br></br>
        <TextField label="email" variant='outlined'/><br></br><br></br>
        <TextField label='Password' variant='outlined' type='password'/><br></br><br></br>
        <Button id='btn-submit' variant='filled'>Submit</Button>
      
    </div>
  )
}

export default Signup

