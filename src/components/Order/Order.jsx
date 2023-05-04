import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { BiFoodMenu } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineSmile } from 'react-icons/ai';

const Order = () => {
    return (
        <div className='bg-secondary p-3'>
            <Container className="my-5">
            <Row>
        <Col md={4}>
          <Figure>
            <BiFoodMenu size={48} />
            
              <h3>Choose your food</h3>
              <p>Select your favorite dishes from our online menu.</p>
            
          </Figure>
        </Col>
        <Col md={4}>
          <Figure>
            <IoCartOutline size={48} />
            
              <h3>Place your order</h3>
              <p>Enter your delivery address and payment information.</p>
            
          </Figure>
        </Col>
        <Col md={4}>
          <Figure>
            <AiOutlineSmile size={48} />
           
              <h3>Enjoy your meal</h3>
              <p>Get ready to savor your delicious meal.</p>
            
          </Figure>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Order;