import styles from './Features.module.css';
import FeaturesNavigator from './FeaturesNavigator/FeaturesNavigator';
import FeaturesDescription from './FeaturesNavigator/FeaturesDescription/FeaturesDescription';
import Title from '../Title/Title';

const Features = () => {
  return (
    <section id="features" className={`features mt-5 ${styles['mb-5']}`}>
      <Title
        className={'features-title text-center'}
        title="Features"
        description={`Our aim is to make it quick and easy for you to access you favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.`}
      />
      <FeaturesNavigator />
      <FeaturesDescription />
    </section>
  );
};

export default Features;
