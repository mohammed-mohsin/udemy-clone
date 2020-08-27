import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css'

const Hero = () => {
    
    return (
        <div >
            <Container fluid="md">
                <Row style={{padding:'20px ',  height: '30rem'}} className='bg-image'>
                    <Col  >
                        <Jumbotron style={{ top:'10px',  height: '22rem', width:"22rem",  backgroundColor:'#fff' }} >

                            <h1>Full skill ahead</h1>
                            <p>
                                Skill up to success with courses from $9.99.</p>
                            <p>Ends August 27.</p>

                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Hero;