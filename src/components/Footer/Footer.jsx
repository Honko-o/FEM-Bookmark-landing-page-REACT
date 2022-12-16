import styles from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logoBookmark from '../../images/logo-bookmark2.svg';
import ContactForm from './ContactForm/ContactForm';

const Footer = () => {
  return (
    <footer className={`text-center mt-5 pt-5 ${styles.footer}`}>
      <Container className="mb-5">
        <span>35,000+ already joined</span>
        <p className="fs-2 mx-auto my-4 fw-500">
          Stay up-to-date with what we’re doing
        </p>
        <ContactForm />
      </Container>
      <nav className={`py-3 ${styles['footer-nav']}`}>
        <Container>
          <Row className="flex-column flex-md-row">
            <Col className="mb-4 mb-md-0">
              <img src={logoBookmark} alt="website logo" />
            </Col>
            <Col>
              <ul className="d-flex flex-column flex-md-row justify-content-md-end gap-3 gap-md-5 text-uppercase">
                <li>
                  <a href="#features" className="text-light">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#installation" className="text-light">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-light">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="mt-4 mt-md-0">
              <div className="icon-wrapper d-flex gap-3 justify-content-center justify-content">
                <a href="https://twitter.com/">
                  <FontAwesomeIcon
                    size="lg"
                    className="text-light"
                    icon={faTwitter}
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon
                    size="lg"
                    className="text-light"
                    icon={faFacebook}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </footer>
  );
};

export default Footer;
