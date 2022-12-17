import styles from './Features.module.css';
import FeaturesNavigator from './FeaturesNavigator/FeaturesNavigator';
import Title from '../Title/Title';
import FeatureWrapper from './FeaturesNavigator/FeatureWrapper/FeatureWrapper';

const Features = ({ setActiveIndex }) => {
  return (
    <section id="features" className={`features mt-5 ${styles['mb-5']}`}>
      <Title
        className={'features-title text-center'}
        title="Features"
        description={`Our aim is to make it quick and easy for you to access you favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.`}
      />
      <FeaturesNavigator setActiveIndex={setActiveIndex} />
      <FeatureWrapper />
    </section>
  );
};

export default Features;
