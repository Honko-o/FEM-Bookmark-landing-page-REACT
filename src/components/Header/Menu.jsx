import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo_bookmark2 from '../../images/logo-bookmark2.svg';
import close_icon from '../../images/icon-close.svg';
import styles from './Menu.module.css';

const Menu = ({ hideMenuHandler, className, style }) => {
  return createPortal(
    <div id={styles.offcanvas} className={className} style={style}>
      <div className="offcanvas_header pb-4">
        <div className="offcanvas_title d-flex justify-content-between">
          <img src={logo_bookmark2} alt="website logo" />
          <button aria-label="Close" onClick={hideMenuHandler}>
            <img src={close_icon} alt="close icon" />
          </button>
        </div>
      </div>
      <div className={`${styles.offcanvas_body}`}>
        <div className="justify-content-end align-items-center gap-3">
          <ul className="d-flex flex-column">
            <li>
              <a href="https://" className="text-uppercase p-3 d-block">
                Features
              </a>
            </li>
            <li>
              <a href="https://" className="text-uppercase p-3 d-block">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://" className="text-uppercase p-3 d-block">
                Contact
              </a>
            </li>
            <li className={`mt-5 `}>
              <a
                href="https://"
                className={`${styles.login} btn btn-outline-light text-uppercase px-4 py-2 w-50`}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.offcanvas_footer} d-flex gap-3 justify-content-center`}
      >
        <a href="https://twitter.com/">
          <FontAwesomeIcon size="lg" className="text-light" icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon size="lg" className="text-light" icon={faFacebook} />
        </a>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Menu;
