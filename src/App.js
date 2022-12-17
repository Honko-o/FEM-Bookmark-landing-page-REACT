import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Installation from './components/Installation/Installation';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import { ActiveIndex } from './context/activeIndexContext';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <Hero />
        <ActiveIndex.Provider value={activeIndex}>
          <Features setActiveIndex={setActiveIndex} />
        </ActiveIndex.Provider>
        <Installation />
        <Faq />
      </Container>
      <Footer />
    </>
  );
}

export default App;
