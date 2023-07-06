import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Navbar from './components/NavBar/NavBar';
import Headline from './components/Headline/Headline';
import Searchbar from './components/Searchbar/SearchBar';
import Stat from './components/Stat/Stat';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Headline/>
      <Searchbar/>
      <Stat/>
    </ThemeProvider>

    </>
  )
}

export default App
