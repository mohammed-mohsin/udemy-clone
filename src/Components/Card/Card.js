import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Cards = (props) => {
    const { image, course, name, price } = props.Card
    const handleAddCart = props.handleAddCart;
    return (
        <Col className="m-3" xs={6} md={3} >
            < Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{course}</Card.Title>
                    <p>{name}</p>
                    <h4>${price}</h4>
                    <Button
                        onClick={()=>handleAddCart(props.Card)}
                        variant="primary"
                    >Enroll Now</Button>
                </Card.Body>
            </Card >
        </Col>

    );
};

export default Cards;