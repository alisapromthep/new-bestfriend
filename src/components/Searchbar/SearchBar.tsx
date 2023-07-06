import {InputBase, Button, IconButton, Paper, Icon} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper
        sx={{
            border: 'solid 1px #ADA7FF',
            borderRadius: '20px',
            margin: '1rem',
            display:'flex',
            justifyContent: 'space-between'
        }}
        >
            <InputBase
            sx={{fontSize:'0.75rem',
            color:'primary',
            padding:'0.5rem'}}
            placeholder='Type your location here...'
            />
            <Button color='secondary'
            sx={{
                backgroundColor:'#ADA7FF',
                borderRadius: '20px'
            }}>
                adopt now
                <SearchIcon/>
            </Button>
        </Paper>
    )
}

export default SearchBar