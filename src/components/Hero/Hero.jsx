import HeroDescription from './HeroDescription/HeroDescription';
import HeroImage from './HeroImage/HeroImage';

const Hero = () => {
  return (
    <main className="d-flex flex-column flex-md-row-reverse justify-content-between align-items-center my-5">
      <HeroImage />
      <HeroDescription />
    </main>
  );
};

export default Hero;
