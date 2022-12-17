import { useCallback, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomButton from '../../Button/CustomButton';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [input, setInput] = useState('');

  const emailValidationHandler = useCallback(() => {
    const res =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = res.test(String(input).toLowerCase());
    setIsValidEmail(isValidEmail);
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    emailValidationHandler();
  };

  const formSubmitHandler = (event) => {
    if (isValidEmail === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    if (isValidEmail && input) {
      console.log(isValidEmail);
    }
  }, [isValidEmail, input]);

  return (
    <Container id="contact">
      <Form
        noValidate
        validated={isValidEmail}
        onSubmit={formSubmitHandler}
        className={`${styles.form}`}
      >
        <Form.Group as={Row}>
          <Col sm={'12'} md={{ span: '6', offset: '2' }} className="mb-4">
            <Form.Control
              value={input}
              type="email"
              onChange={handleInputChange}
              className={`py-2 ${styles['form-control']}`}
              placeholder="Enter your email address"
              required
            />
            {!isValidEmail && input.length > 10 ? (
              <em className="d-block text-left text-white fs-6">
                Whoops, make sure it's an email
              </em>
            ) : null}
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
