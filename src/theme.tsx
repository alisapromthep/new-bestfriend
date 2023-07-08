import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles'{
    interface BreakpointOverrides {
        xs:false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        desktop: true;
    }
}

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
        main: '#ADA7FF',
        },
        secondary: {
        main: '#FFFFFF',
        },
        error: {
        main: red.A400,
        },
    },
    breakpoints:{
        values:{
            mobile:375,
            desktop:1440,
        }
    },
    typography:{
        h1:{
            fontSize: '1.5rem',
            fontWeight: '600'
        }
    },
    components: {
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize: '1rem',
                    textTransform: 'lowercase',
                }
            }
        }
    }

});

export default theme;
