import styles from './CustomButton.module.css';

const CustomButton = ({
  className = '',
  type = 'primary',
  children,
  props,
}) => {
  switch (type) {
    case 'login':
      className += ` ${styles['login-btn']} ${styles.btn} `;
      break;
    case 'default':
      className += ` ${styles['default-btn']} ${styles.btn} `;
      break;
    default:
      className += ` ${styles['primary-btn']} ${styles.btn} `;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
