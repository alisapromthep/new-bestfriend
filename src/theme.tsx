import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

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
    typography:{
        h1:{
            fontSize: '2.5rem',
        }
    }
});

export default theme;
