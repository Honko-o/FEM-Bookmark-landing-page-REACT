import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Installation from './components/Installation/Installation';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Features />
        <Installation />
        <Faq />
      </Container>
      <Footer />
    </>
  );
}

export default App;
