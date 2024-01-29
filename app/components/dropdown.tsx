import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import './accordion.css';

function Dropdown() {
  const [activeKey, setActiveKey] = useState('0');

  const handleAccordionChange = (key) => {
    setActiveKey(key);
  };
  
  const renderImage = () => {
    switch (activeKey) {
      case '0':
        return <Image  style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', objectFit: 'cover', width: '700px', height: '530px', borderRadius: '0.3rem'}}  src="/mockup-654585_1920.jpg" alt="Image 1" fluid />;
      case '1':
        return <Image   style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', objectFit: 'cover', width: '700px', height: '530px', borderRadius: '0.3rem' }} src="/code-1076536_1920.jpg" alt="Image 2" fluid />;
      case '2':
        return <Image  style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', objectFit: 'cover', width: '700px', height: '530px', borderRadius: '0.3rem' }}  src="/problem-7004146_1920.jpg" alt="Image 3" fluid />;
      // Add more cases for additional accordion items
      default: 
      return <Image style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', objectFit: 'cover', width: '700px', height: '530px', borderRadius: '0.3rem' }} src="/mockup-654585_1920.jpg" alt="Image 1" fluid />;
    }
  };

  return (
    <div className='container'>
        <div className='row d-flex align-items-center'>
            <div className ="fs-4 col p-0">
                <Accordion activeKey={activeKey} onSelect={handleAccordionChange} >
                    <Accordion.Item eventKey="0">
                    <Accordion.Header><p style={{fontSize: '1.8rem', margin: '0'}}>Chat</p></Accordion.Header>
                    <Accordion.Body>
                    Communicate in realtime within specific topics using text, images and more!
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header><p style={{fontSize: '1.8rem', margin: '0'}}>Call</p></Accordion.Header>
                    <Accordion.Body>
                       Participate in live voice calls with other users within a group while simultaniously collaborating on important topics within your group.
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header><p style={{fontSize: '1.8rem', margin: '0'}}>Organise</p></Accordion.Header>
                    <Accordion.Body>
                        Arrange important documents, images and other files within your group.
                    </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="3">
                    <Accordion.Header><p style={{fontSize: '1.8rem', margin: '0'}}>Whiteboard</p></Accordion.Header>
                    <Accordion.Body>
                      Use your whiteboard as a collaboration tool to brainstorm ideas, showcase and edit documents simultaniously. 
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                    <Accordion.Header><p style={{fontSize: '1.8rem', margin: '0'}}>Content Creation</p></Accordion.Header>
                    <Accordion.Body>
                      Create and organise microsoft office documents within your group.
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                    <Accordion.Header><p style={{fontSize: '2rem', margin: '0'}}>Roles</p></Accordion.Header>
                    <Accordion.Body>
                        Create roles to manage your team effecitviely. With the manager role, get an overview of the statistics of your group allowing you to analyse your teams engagement.
                    </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
        </div>

        <div className = "col d-none d-sm-block p-0" style={{marginLeft: "5rem"}}>
            {/* Render corresponding image */}
            {renderImage()}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
