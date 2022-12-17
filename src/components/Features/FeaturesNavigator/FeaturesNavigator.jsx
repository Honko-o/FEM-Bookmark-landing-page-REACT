import { useState } from 'react';
import { ActiveIndex } from '../../../context/activeIndexContext';
import styles from './FeaturesNavigator.module.css';

const FeaturesNavigator = ({ setActiveIndex }) => {
  const [buttonsData, setButtonsData] = useState([
    {
      id: 1,
      content: 'Simple Bookmarking',
    },
    {
      id: 2,
      content: 'Speedy Searching',
    },
    {
      id: 3,
      content: 'Easy Sharing',
    },
  ]);

  const clickHandler = (idx) => {
    setActiveIndex(idx);
  };

  const renderLinks = (index, activeIndex, content) => {
    return (
      <li
        onClick={() => clickHandler(index)}
        className={`${styles['features-navigator-li']} ${
          index === activeIndex ? styles['features-navigator-li-active'] : ''
        } position-relative fs-6 mb-3 mb-md-0`}
      >
        <button className={`${styles['features-navigator-btn']}`}>
          {content}
        </button>
      </li>
    );
  };

  const renderNavigation = () => {
    return buttonsData.map(({ id, content }, index) => (
      <ActiveIndex.Consumer key={id}>
        {(activeIndex) => renderLinks(index, activeIndex, content)}
      </ActiveIndex.Consumer>
    ));
  };
  return (
    <ul
      className={`${styles['features-navigator-ul']} my-5 d-flex flex-column flex-md-row justify-content-center text-center-sm-md mx-auto`}
    >
      {renderNavigation()}
    </ul>
  );
};

export default FeaturesNavigator;
