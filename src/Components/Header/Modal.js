
import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const MyVerticallyCenteredModal = (props) => {
    const totalPrice = props.cart.reduce((sum, data) => sum + data.price,0)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="text-center">
                        <h2> Cart Item</h2>
                    </div>
                    <br />
                    <Row className='d-flex justify-content-between'>
                        <div><h4>My Cart({props.cart.length})</h4></div>



                    </Row>


                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>All Your Purchase</h4>
                <Row >
                    <Col>

                        {props.cart.map(data =>
                            <div>
                                <div className="d-flex justify-content-between" >
                                    <div >  {data.course}  </div>
                                    <div > $ {data.price}  </div>
                                </div>
                            </div>
                        )}
                        <div className="d-flex justify-content-between">
                            <h4>Total Price: </h4>
                            <h4> ${totalPrice.toFixed(2)}</h4>
                        </div>

                    </Col>

                </Row>




            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;

