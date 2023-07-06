import {Container, Box, Typography} from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

interface infoItem{
    num: string;
    text: string;
}

const Stat = () => {

    const info: infoItem[] = [{
        num: '828,037+',
        text: 'Rescue Dog saved' 
    },
    {
        num: '654,824+',
        text: 'Rescue Cat saved' 
    }];

    return (
        <Container
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItem:'center'
        }}
        >
            {
                info.map((data,i)=>{
                    return (
                        <Box key={i}
                        margin='1rem'
                        >
                            <Typography 
                            sx={{
                                fontWeight:'800',
                                fontSize:'2rem'
                            }}>
                                {data.num}
                            </Typography>
                            <Typography>
                                {data.text}
                            </Typography>
                        </Box>
                    )
                    })
            }

        </Container>
    )
}

export default Stat