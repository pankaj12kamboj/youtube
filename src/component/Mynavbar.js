import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar, Form, FormControl, Button } from "react-bootstrap";



export const Mynavbar = () => {
    return (
        <div>
            <Navbar>
                <Container>


                    <Navbar.Brand href="#home">
                        <img src='images/logo.png' alt='text' />
                    </Navbar.Brand>

                    <Form className="d-flex mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-2" />
                        <Button variant="outline-success">Search</Button>
                        <img src='images/dwd.png' alt='text' />
                    </Form>
                    <Nav className="ml-auto">
                        <img src='images/video.png' alt='text' />

                        <img src='images/notic.png' alt='text' />


                        <img src='images/icon.png' alt='text' />
                    </Nav>

                </Container>
            </Navbar >
        </div >
    )
}
