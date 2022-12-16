import Card from 'react-bootstrap/Card';
import CustomButton from '../../Button/CustomButton';

const BrowserCard = ({ className, src, version }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Card.Title className="mt-5">
          <img src={src} alt={'chrome logo for installation card'} />
          <h3 className="mt-4 color-dark-blue-900 fs-4">Add to Chrome</h3>
        </Card.Title>
        <Card.Subtitle role={'browser version'} className="mb-4 text-muted">
          {version}
        </Card.Subtitle>
        <CustomButton className="mt-4 px-4 py-2">
          Add & Install Extension
        </CustomButton>
      </Card.Body>
      {/* Here wallah */}
    </Card>
  );
};

export default BrowserCard;
