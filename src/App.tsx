import './App.css';
import { ThemeProvider } from '@emotion/react';
import {Container} from '@mui/material';
import theme from './theme';
import Navbar from './components/NavBar/NavBar';
import Headline from './components/Headline/Headline';
import Searchbar from './components/Searchbar/SearchBar';
import Stat from './components/Stat/Stat';
import PetCard from './components/PetCard/PetCard';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Container>
        <Headline/>
        <Searchbar/>
        <Stat/>
        <PetCard/>
      </Container>
    </ThemeProvider>

    </>
  )
}

export default App
