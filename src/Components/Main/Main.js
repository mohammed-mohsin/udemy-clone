import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Cards from '../Card/Card';
import Card from '../../fake.json'
const Main = (props) => {

    const  handleAddCart=props.handleAddCart
    return (
        <div>
            <Container>
                <h3>The world's largest selection of courses</h3>
                <p>Choose from 150,000 online video courses with new additions published every month</p>
                <Row className='justify-content-lg-between'>
                    {
                        Card.map(data => <Cards Card={data} key={data.id} handleAddCart={handleAddCart}  ></Cards>)
                    }
                </Row>




            </Container>

        </div>
    );
};

export default Main;