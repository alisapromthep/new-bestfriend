import {Card, CardContent, CardMedia, CardActions, Button, Typography} from '@mui/material';
import kitty from '../../assets/sally-door.png';
import PetsIcon from '@mui/icons-material/Pets';

const PetCard = () => {
    return (
        <Card elevation={0}>
            <CardMedia
            sx={{
                borderRadius:'60px',
                width:'20.6rem',
                height:'20rem',
                objectFit:'cover'
            }}
            image={kitty}
            title='cat sitting in a small door opening'
            />
            <CardContent
            sx={{
                    display:'flex',
                    justifyContent:'space-between'
                }}
            >
                <Typography>
                    Hi! My name is:
                    <Typography color='primary'
                    sx={{fontSize:'2rem'}}
                    >
                        Rosalina
                    </Typography>
                </Typography>
                <CardActions>
                    <Button sx={{backgroundColor:'#ADA7FF',
                    borderRadius: '10px',
                    color:'#FFFFFF'}}>
                        adopt me
                        <PetsIcon/>
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PetCard