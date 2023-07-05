import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';

    const Navbar: React.FC = () => {

    return (
        <AppBar position="static"
        elevation={0}
        sx={{borderRadius:'20px 20px 0 0'}}
        >
            <Toolbar         
            sx={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <Icon color='secondary'>
                <PetsIcon/>
            </Icon>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
            >
            <Icon color='secondary'>
                <MenuIcon/>
            </Icon>
            </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
