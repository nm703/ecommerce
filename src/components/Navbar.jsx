import React from 'react';
import { AppBar, Toolba, IconButton, MenuItem, Badge, Typography, Menu, Toolbar } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.jpg';

function Navbar() {
    return (
        <div>
            <AppBar position='fixed' className='appBar' color='inherit' sx={{
                boxShadow: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            }} >
                <Toolbar>
                    <Typography variant='h6' color='inherit' className='title' sx={{
                        flexGrow: 1,
                        alignItems: 'center',
                        display: 'flex',
                        textDecoration: 'none',
                    }}>
                        <img src={logo} alt="Commerce.js" height="25px" className='image' style={{ marginRight: '10px' }} />
                        Commerce.js
                    </Typography>
                    <div className='grow' sx={{ flexGrow: 1 }} />

                    <div className='button' sx={{}}>
                        <IconButton aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'></Badge>
                            <ShoppingCart />

                        </IconButton>

                    </div>




                </Toolbar>

            </AppBar>
        </div >
    )
}

export default Navbar
