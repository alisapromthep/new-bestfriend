import {Box} from '@mui/material';
import Kitty from '../../assets/sally-door.png';

const Image = () => {
    return (
        <Box 
        sx={{
            borderRadius:'60px',
            width:'20.6rem',
            height:'20rem',
            objectFit:'cover'
        }}>
            <img src={Kitty} className='image'/>
        </Box>
    )
}

export default Image