import feature_one from '../../../../images/illustration-features-tab-1.svg';
import styles from './FeaturesDescription.module.css';
import SemiCircleShape from '../../../SemiCircleShape/SemiCircleShape';
import CustomButton from '../../../Button/CustomButton';

//  This Components needs serious refactor and splititng
const FeaturesDescription = () => {
  return (
    <article
      className={`d-flex flex-column flex-md-row position-relative gap-5 justify-content-between align-items-center mb-5 mb-md-0`}
    >
      <SemiCircleShape
        direction="left"
        className={`flex-equal position-relative ${styles['features-description']}`}
      >
        <img src={feature_one} alt="features tab 1" className="img-fluid" />
      </SemiCircleShape>
      <div className={`flex-equal my-5 my-md-0 feature-text text-center-sm-md`}>
        <h2 className="color-dark-blue-900">Bookmark in one click</h2>
        <p className="my-4 color-gray-blue">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manager your
          favourties sites.
        </p>
        <CustomButton className="py-2 px-4">More Info</CustomButton>
      </div>
    </article>
  );
};

export default FeaturesDescription;
