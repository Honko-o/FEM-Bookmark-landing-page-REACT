import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomButton from '../../Button/CustomButton';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <Container id="contact">
      <Form className={`${styles.form}`}>
        <Form.Group as={Row}>
          <Col sm={'12'} md={{ span: '6', offset: '2' }} className="mb-3">
            <Form.Control
              className="py-2 mb-4"
              placeholder="Enter your email address"
            />
          </Col>
          <Col sm={'12'} md={{ span: '3' }}>
            <CustomButton className="py-2 w-100" type="login">
              Contact Us
            </CustomButton>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ContactForm;
