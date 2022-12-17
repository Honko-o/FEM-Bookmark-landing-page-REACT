import { useMemo } from 'react';
import SemiCircleShape from '../../SemiCircleShape/SemiCircleShape';
import styles from './FeatureImage.module.css';
import feature_1 from '../../../images/illustration-features-tab-1.svg';
import feature_2 from '../../../images/illustration-features-tab-2.svg';
import feature_3 from '../../../images/illustration-features-tab-3.svg';

const FeatureImage = ({ activeIndex }) => {
  const imageChanger = useMemo(() => {
    switch (activeIndex) {
      case 0:
        return feature_1;
      case 1:
        return feature_2;
      default:
        return feature_3;
    }
  }, [activeIndex]);
  //   console.log(imageChanger);
  return (
    <SemiCircleShape
      direction="left"
      className={`flex-equal position-relative ${styles['features-image']}`}
    >
      <img src={imageChanger} alt="features tab 1" className="img-fluid" />
    </SemiCircleShape>
  );
};

export default FeatureImage;
