import './App.css';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import Home from './home/Home';
import About from './components/about/About';
import Reports from './components/reports/Reports';
import SBuy from './components/sBuy/SBuy';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
      <About />
      <Reports />
      <SBuy />
      <Details />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
