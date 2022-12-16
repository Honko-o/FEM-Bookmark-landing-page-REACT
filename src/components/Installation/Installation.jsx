import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BrowserCard from './BrowserCard/BrowserCard';
import chromeLogo from '../../images/logo-chrome.svg';
import firefoxLogo from '../../images/logo-firefox.svg';
import operaLogo from '../../images/logo-opera.svg';
import styles from './Installation.module.css';
import Title from '../Title/Title';

const Installation = () => {
  return (
    <section id="installation" className="installtion my-5">
      <Title
        className={'flex-equal feature-text text-center mb-5'}
        title="Download the extension"
        description={`We've got more browsers in the pipeline. please do let us know if
          you've got a favorite you'd like us to prioritize.`}
      />
      <Container>
        <Row className="text-center gap-5 gap-md-0 py-5">
          <Col xs={12} md={4}>
            <BrowserCard
              className={`${styles['bg-dots']}`}
              version="Minimum version 62"
              src={chromeLogo}
            />
          </Col>
          <Col xs={12} md={4}>
            <BrowserCard
              className={`${styles['bg-dots']}`}
              version="Minimum version 55"
              src={firefoxLogo}
            />
          </Col>
          <Col xs={12} md={4}>
            <BrowserCard
              className={`${styles['bg-dots']}`}
              version="Minimum version 46"
              src={operaLogo}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Installation;
