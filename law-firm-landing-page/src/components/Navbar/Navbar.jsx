import React, { useState } from 'react';
import { Box, Container, IconButton, Stack, useMediaQuery } from '@mui/material';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import './Navbar.css';

const Navbar = () => {

  const isMobile = useMediaQuery('(max-width: 900px)');
  const [open, setOpen] = useState(false);
  return (
    <>

      <Box sx={{height: '70px', display: 'flex', alignItems: 'center'}}>
        <Box className="navbar">
          <div>
            <img src={logo} alt="logo" className='logo'></img>
            </div>
            <div className='links' style={{ display: 'flex', alignItems: 'center'}}>
              <Link style={{ textDecoration: 'none', color: 'white'}} to="/">Home</Link>
              <Link style={{ textDecoration: 'none', color: 'white'}} to="/about">Attorneys</Link>
              <Link style={{ textDecoration: 'none', color: 'white'}} to="/login">Practice Areas</Link>
              <Link style={{ textDecoration: 'none', color: 'white'}} to="/about">About Us</Link>
            </div>
            <Contact />
        </Box>
      </Box>
    </>
  )
}

export default Navbar