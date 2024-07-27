import React, { useState } from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageDetailsModal.css'; // Import the CSS file

import myImage1 from './assets/1718892157809-03.webp';
import myImage2 from './assets/1718892171432-04.webp';
import myImage3 from './assets/1718892202485-01.webp';
import locationImage from './assets/download_loc.jpeg';

const ImageDetailsModal = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedTivoli, setExpandedTivoli] = useState(false);
  const [expandedBuilder, setExpandedBuilder] = useState(false);

  const images = [myImage1, myImage2, myImage3];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const toggleExpandTivoli = () => {
    setExpandedTivoli(!expandedTivoli);
  };

  const toggleExpandBuilder = () => {
    setExpandedBuilder(!expandedBuilder);
  };

  const builderText = "The Puravankara Group has been involved in real estate for 45 years and has finished 48 residential and 2 commercial projects covering a total of 23.54 million sq. ft. The company succeeds through robust values, customer happiness, firm foundations, and ethical business methods. They have significantly influenced urban areas such as Bangalore, Kochi, Chennai, Coimbatore, Hyderabad, and Mysore, as well as globally in Dubai, Colombo, and Saudi Arabia. This elevates Puravankara Group to one of the leading developers in these areas. In Bangalore, the residential projects are strategically located near parks, hospitals, schools, colleges, retail stores, and restaurants to provide residents with convenient living.";
  
  const tivoliText = "Tivoli Hills, a luxurious Roman-themed residential plotted development project by Purva Group with a panoramic view of Nandi Hills, is conveniently located in Devanahalli. Spread across 61 acres, it offers 839 plots of varied sizes, allowing residents to design their dream homes. The gated neighbourhood features a luxurious clubhouse with amenities like a swimming pool, gym, party hall, and many more.";

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View More
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              {/* First Half: Images */}
              <Col xs={12} md={5} className="image-column">
                <div className="carousel-container">
                  <Carousel selectedItem={activeIndex} showThumbs={false}>
                    {images.map((imgSrc, index) => (
                      <div key={index}>
                        <img src={imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="thumbnail-container">
                  <Row>
                    {images.map((imgSrc, index) => (
                      <Col key={index} xs={4}>
                        <img 
                          src={imgSrc} 
                          alt={`Attached ${index + 1}`} 
                          className="thumbnail-image"
                          onClick={() => handleImageClick(index)}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              {/* Second Half: Description */}
              <Col xs={12} md={7} className="description-column">
                <div className="section">
                  <h2>Puravankara</h2>
                </div>

                <div className="section">
                  <h4>Tivoli</h4>
                  <p>
                    {expandedTivoli ? tivoliText : `${tivoliText.substring(0, 150)}...`}
                  </p>
                  <Button variant="link" onClick={toggleExpandTivoli}>
                    {expandedTivoli ? 'View Less' : 'View More'}
                  </Button>
                </div>

                <div className="section">
                  <h4>About Builder</h4>
                  <p>
                    {expandedBuilder ? builderText : `${builderText.substring(0, 150)}...`}
                  </p>
                  <Button variant="link" onClick={toggleExpandBuilder}>
                    {expandedBuilder ? 'View Less' : 'View More'}
                  </Button>
                </div>

                 {/* Grid Section */}
                 <div className="section grid-section">
                  <Row>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Base Price</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Plot Size</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Area</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item location-item">
                    <img src={locationImage} alt="Location" className="location-image" />
                    <div className="location-overlay">Location Details</div>
                  </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Total Units</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Project Type</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Status</div>
                    </Col>
                    <Col xs={12} md={3} className="grid-item">
                      <div className="grid-content">Get Direction</div>
                    </Col>
                  </Row>
                  
                </div>

                <div className="section button-section">
                  <Button variant="primary" className="action-button">Chat Now</Button>
                  <Button variant="secondary" className="action-button">Call Now</Button>
                  <Button variant="success" className="action-button">Schedule Visit</Button>
                </div>

                <div className="section">
                  <p>More details can go in this section.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageDetailsModal;
