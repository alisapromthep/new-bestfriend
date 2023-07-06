import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Navbar from './components/NavBar/NavBar';
import Headline from './components/Headline/Headline';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Headline/>
    
    </ThemeProvider>

    </>
  )
}

export default App
