import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoBookmark from '../../images/logo-bookmark.svg';
import CustomButton from '../Button/CustomButton';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const idIndex = document.URL.indexOf('#');
    const id = document.URL.slice(idIndex);
    document.querySelector(id).scrollIntoView();
  }, [show]);

  return (
    <Navbar bg="light" expand={'md'}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoBookmark} alt="website logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          onHide={handleClose}
          onShow={handleShow}
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center gap-3 flex-grow-1 pe-3">
              <Nav.Link href="#features" className="text-uppercase">
                features
              </Nav.Link>
              <Nav.Link href="#installation" className="text-uppercase">
                pricing
              </Nav.Link>
              <Nav.Link href="#contact" className="text-uppercase">
                contact
              </Nav.Link>
              <Nav.Link href="#action4" className="text-uppercase">
                <CustomButton type="login" className="px-4 py-2">
                  login
                </CustomButton>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
