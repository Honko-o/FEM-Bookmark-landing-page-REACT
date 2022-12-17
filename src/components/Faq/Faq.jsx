import Accordion from 'react-bootstrap/Accordion';
import CustomButton from '../Button/CustomButton';
import Title from '../Title/Title';

const Faq = () => {
  return (
    <>
      <Title
        className={'text-center my-5'}
        title={'Frequently Asked Questions'}
        description={`Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.`}
      />
      <Accordion className="my-5 overflow-hidden" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ width: '95%' }}>
            What is Bookmark?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={``}>
          <Accordion.Header style={{ width: '95%' }}>
            How can I request a new browser?
          </Accordion.Header>
          <Accordion.Body>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className={``}>
          <Accordion.Header style={{ width: '95%' }}>
            Is there a mobile app?
          </Accordion.Header>
          <Accordion.Body>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className={``}>
          <Accordion.Header style={{ width: '95%' }}>
            What about other Chromium browsers?
          </Accordion.Header>
          <Accordion.Body>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <CustomButton className="px-4 py-2 d-flex mx-auto mb-5">
        More Info
      </CustomButton>
    </>
  );
};

export default Faq;
