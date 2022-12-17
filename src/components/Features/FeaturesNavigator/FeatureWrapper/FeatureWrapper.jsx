import { ActiveIndex } from '../../../../context/activeIndexContext';
import FeatureImage from '../../FeatureImage/FeatureImage';
import FeatureDescription from '../FeatureDescription/FeatureDescription';

const FeatureWrapper = () => {
  return (
    <article
      className={`d-flex flex-column flex-md-row position-relative gap-5 justify-content-between align-items-center mb-5 mb-md-0`}
    >
      <ActiveIndex.Consumer>
        {(activeIndex) => <FeatureImage activeIndex={activeIndex} />}
      </ActiveIndex.Consumer>
      <FeatureDescription />
    </article>
  );
};

export default FeatureWrapper;
