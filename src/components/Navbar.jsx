import { AppBar, Box,Typography,Button, IconButton, Toolbar } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FACEBOOK
          </Typography>
          <Button color="inherit"><Link to ='/login' style={{color:'white',textDecoration:"none"}}>Login</Link></Button>
          <Button color="inherit"><Link to='/Signup' style={{color:'white',textDecoration:"none"}}>Signup</Link></Button>
          <Button color="inherit"><Link to='/' style={{color:'white',textDecoration:"none"}}>Home</Link></Button>
        </Toolbar>
            </AppBar>
            </Box>
            

      
    
  )
}

export default Navbar
