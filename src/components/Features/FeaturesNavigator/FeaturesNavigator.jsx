import styles from './FeaturesNavigator.module.css';

const FeaturesNavigator = () => {
  return (
    <ul
      className={`${styles['features-navigator-ul']} my-5 d-flex flex-column flex-md-row justify-content-center text-center-sm-md mx-auto`}
    >
      <li
        className={`${styles['features-navigator-li']} ${styles['features-navigator-btn-active']} position-relative fs-6 mb-3 mb-md-0`}
      >
        <button className={`${styles['features-navigator-btn']}`}>
          Simple Bookmarking
        </button>
      </li>
      <li
        className={`${styles['features-navigator-li']} position-relative fs-6 mb-3 mb-md-0`}
      >
        <button className={`${styles['features-navigator-btn']}`}>
          Speedy Searching
        </button>
      </li>
      <li
        className={`${styles['features-navigator-li']} position-relative fs-6`}
      >
        <button className={`${styles['features-navigator-btn']}`}>
          Easy Sharing
        </button>
      </li>
    </ul>
  );
};

export default FeaturesNavigator;
