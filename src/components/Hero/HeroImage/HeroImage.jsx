import heroImage from '../../../images/illustration-hero.svg';
import SemiCircleShape from '../../SemiCircleShape/SemiCircleShape';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <SemiCircleShape
      direction="right"
      className={`position-relative mb-5 mb-md-0 flex-equal ${styles['hero-image']}`}
    >
      <img src={heroImage} alt="hero illustration" className="img-fluid" />
    </SemiCircleShape>
  );
};

export default HeroImage;
