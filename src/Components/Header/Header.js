import React, { useState } from 'react';
import { Navbar, Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MyVerticallyCenteredModal from './Modal';

const Header = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>

            <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img className="brand d-inline-block align-top"
                        src="https://i.imgur.com/03XRl0c.png"
                        width="100"
                        height="100"

                        alt="Udemy"
                    />
                </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Courses
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Search Bar */}

                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        {/* <FontAwesomeIcon className="" icon={faSearch} /> */}
                    </InputGroup.Prepend>
                    <FormControl className="rounded-pill" placeholder="Search for anything" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <div style={{
                    position: "relative",
                }} className="asd" onClick={() => setModalShow(true)} variant="light"> <h3><FontAwesomeIcon style={{

                    lineHeight: "60px"
                }} className="icon " icon={faShoppingCart} /> <span style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: "#ff2c74",
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: "25px",
                    textAlign: "center"
                }} className="count">{props.cart.length}</span> </h3></div>
                <MyVerticallyCenteredModal
                    cart={props.cart}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />


                <Button className="ml-3" variant="outline-info">LogIn</Button>{' '}
                <Button className="ml-3" variant="info">SignUp</Button>{' '}


                {/*  */}








            </Navbar>
        </div >
    );
};

export default Header;