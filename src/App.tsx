import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Navbar from './components/NavBar/NavBar';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <h1>Find your new best friend</h1>
    </ThemeProvider>

    </>
  )
}

export default App
