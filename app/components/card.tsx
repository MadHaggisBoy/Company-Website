import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function DarkVariantExample() {
  return (
    <Carousel className="shadow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Callum.png"
          height={'500px'}
          width={'900px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5  style={{color: 'white', textShadow: '2px 2px black'}}>Callum</h5>
          <p style={{color: 'white', textShadow: '2px 2px black'}}>Meng - Software Engineering Program</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Angelo.png"
          height={'500px'}
          width={'900px'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{color: 'white', textShadow: '2px 2px black'}}>Angelo</h5>
          <p  style={{color: 'white', textShadow: '2px 2px black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Toby.png"
          height={'500px'}
          width={'900px'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5  style={{color: 'white', textShadow: '2px 2px black'}}>Toby</h5>
          <p style={{color: 'white', textShadow: '2px 2px black'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          height={'500px'}
          width={'900px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{color: 'white', textShadow: '2px 2px black'}}>Aldo</h5>
          <p  style={{color: 'white', textShadow: '2px 2px black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          height={'500px'}
          width={'900px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{color: 'white', textShadow: '2px 2px black'}}>Jack B</h5>
          <p  style={{color: 'white', textShadow: '2px 2px black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          height={'500px'}
          width={'900px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5  style={{color: 'white', textShadow: '2px 2px black'}}>Jack V</h5>
          <p   style={{color: 'white', textShadow: '2px 2px black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          height={'500px'}
          width={'900px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5  style={{color: 'white', textShadow: '2px 2px black'}}>Reuben</h5>
          <p   style={{color: 'white', textShadow: '2px 2px black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;