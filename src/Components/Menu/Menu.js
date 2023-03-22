import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">LUXURY HOTEL</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Rooms</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Booking</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu