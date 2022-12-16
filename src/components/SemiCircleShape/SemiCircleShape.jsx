import styles from './SemiCircleShape.module.css';

const SemiCircleShape = ({ direction, className = '', children, props }) => {
  if (direction === 'left') {
    className += ` ${styles.left}`;
  } else if (direction === 'right') {
    className += ` ${styles.right}`;
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default SemiCircleShape;
