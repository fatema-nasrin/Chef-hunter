import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

const CarouselSection = () => {
  const services = [
    {
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our exquisite wedding catering services.",
      buttonText: "Book Now",
      image: "/public/wedding.jpg",
    },
    {
      title: "Corporate Events",
      description:
        "Impress your clients and colleagues with our professional corporate event catering services.",
      buttonText: "Book Now",
      image: "/public/corporatejpeg.jpeg",
    },
    {
      title: "Birthday Parties",
      description:
        "Make your birthday celebration extra special with our delectable catering options.",
      buttonText: "Book Now",
      image: "/public/birthday.jpeg",
    },
  ];

  return (
    <div className="mt-5">
      <Carousel fade>
        {services.map((service, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container className="py-5">
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Button variant="primary">{service.buttonText}</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
