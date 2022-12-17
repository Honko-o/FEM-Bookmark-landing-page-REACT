import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoBookmark from '../../images/logo-bookmark.svg';
import Menu from './Menu';
import Nav from 'react-bootstrap/Nav';
import CustomButton from '../Button/CustomButton';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
    document.body.style.overflowY = 'hidden';
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
    document.body.removeAttribute('style');
  };

  return (
    <Navbar bg="light" expand={'md'}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoBookmark} alt="website logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={showMenuHandler}
          aria-controls="offcanvasNavbar-expand-md"
        />
        <Nav className="ms-auto d-none d-md-flex align-items-center gap-3">
          <Nav.Link href="#features" className="text-uppercase">
            Features
          </Nav.Link>
          <Nav.Link href="#installation" className="text-uppercase">
            Pricing
          </Nav.Link>
          <Nav.Link href="#contact" className="text-uppercase">
            Contact
          </Nav.Link>
          <Nav.Link href="#" className="text-uppercase">
            <CustomButton type="login" className="px-4 py-2">
              Contact
            </CustomButton>
          </Nav.Link>
        </Nav>
        {showMenu ? (
          <Menu
            hideMenuHandler={hideMenuHandler}
            showMenuHandler={showMenuHandler}
            showMenu={showMenu}
          />
        ) : null}
      </Container>
    </Navbar>
  );
}

export default Header;
