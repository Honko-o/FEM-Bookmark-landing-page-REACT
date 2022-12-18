import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoBookmark from '../../images/logo-bookmark.svg';
import Menu from './Menu';
import Nav from 'react-bootstrap/Nav';
import CustomButton from '../Button/CustomButton';
import { Transition } from 'react-transition-group';

const duration = 500;

const transitionDuration = {
  transition: `opacity ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);

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
              Login
            </CustomButton>
          </Nav.Link>
        </Nav>
        <Transition
          nodeRef={nodeRef}
          in={showMenu}
          timeout={duration}
          unmountOnExit
          appear
        >
          {(state) => {
            console.log(state);
            return showMenu ? (
              <Menu
                hideMenuHandler={hideMenuHandler}
                showMenuHandler={showMenuHandler}
                showMenu={showMenu}
                className={`p-4 text-center`}
                style={{ ...transitionStyles[state], ...transitionDuration }}
              />
            ) : null;
          }}
        </Transition>
      </Container>
    </Navbar>
  );
}

export default Header;
