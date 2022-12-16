import CustomButton from '../../Button/CustomButton';

const HeroDescription = () => {
  return (
    <div className="hero-description flex-equal text-center-sm-md">
      <h1 className="color-dark-blue-900">A Simple Bookmark Manager</h1>
      <p className="my-4 color-gray-blue">
        A clean and simple interface to organize your facourite websites. Open a
        new browser tab and see your ites load instantly. Try it for Free
      </p>
      <div className="hero-description-buttons mb-5 d-flex justify-content-center justify-content-md-start gap-3">
        <CustomButton className="py-2 px-4 fs-6">Get it on Chrome</CustomButton>
        <CustomButton type="default" className="py-2 px-4 fs-6">
          Get it on Firefox
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroDescription;
