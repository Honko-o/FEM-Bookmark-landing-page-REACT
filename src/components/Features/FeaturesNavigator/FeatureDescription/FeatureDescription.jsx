import { useState } from 'react';
import { ActiveIndex } from '../../../../context/activeIndexContext';
import CustomButton from '../../../Button/CustomButton';

const FeatureDescription = () => {
  const [content, setContent] = useState([
    {
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manager your favourties sites.',
    },
    {
      title: 'Intellignet search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl though all of your bookmarks',
    },
    {
      title: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a Shareable link that you can send at the click of a buttons.',
    },
  ]);

  const renderContent = (title, description) => {
    return (
      <div className="flex-equal my-5 my-md-0 feature-text text-center-sm-md">
        <h2 className="color-dark-blue-900">{title}</h2>
        <p className="my-4 color-gray-blue">{description}</p>
        <CustomButton className="py-2 px-4">More Info</CustomButton>
      </div>
    );
  };
  console.log();
  return (
    <ActiveIndex.Consumer>
      {(activeIndex) =>
        renderContent(
          content[activeIndex].title,
          content[activeIndex].description
        )
      }
    </ActiveIndex.Consumer>
  );
};

export default FeatureDescription;
