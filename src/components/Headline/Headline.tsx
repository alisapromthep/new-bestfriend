import { Container, Typography } from "@mui/material"

const Headline = () => {
    return (
        <Container 
        sx={{
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            }}>
            <Typography variant="h1" align="left"
            sx={{margin:'1rem'}}
            >
                Find your new <span className="text-highlight">best friend</span>
            </Typography>
            <Typography variant="body1" align="left"
            sx={{margin:'1rem', fontSize:'0.875rem'}}
            >
                Let's get started. Search pets from shelters, rescues, and individuals
            </Typography>
        </Container>
    )
}

export default Headline;