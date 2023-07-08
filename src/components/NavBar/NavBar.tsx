import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, MenuItem, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';

    const Navbar: React.FC = () => {

        const pages: string[] = ['Home', 'about us', 'service', 'gallery', 'contact us'];

    return (
        <AppBar position="static"
        elevation={0}
        sx={{borderRadius:'20px 20px 0 0',
        backgroundColor:{mobile: '#ADA7FF', desktop:'transparent'},
        margin:{desktop:'3rem 12rem'}
        }}
        >
            <Toolbar         
            sx={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <Icon 
            sx={{color:{ mobile: '#ffffff', desktop:'#ADA7FF'}}}
            >
                <PetsIcon/>
            </Icon>
            <IconButton
                sx={{display: {desktop:'none'}}}
                edge="end"
                color="inherit"
                aria-label="menu"
            >
            <Icon color='secondary'>
                <MenuIcon/>
            </Icon>
            </IconButton>
            <Box sx={{display: {mobile:'none', desktop:'flex'},
            }}>
                {pages.map((page,i)=>(
                    <MenuItem key={i}>
                        {page}
                    </MenuItem>
                ))}
            </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
