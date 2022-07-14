import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className='test'>
        <Container>
        <Navbar.Brand href="#home" className='logo'>Alpha Cups</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Who We are</Nav.Link>
            <Nav.Link href="#pricing">What We Build</Nav.Link>
            <Nav.Link href="#pricing">Our Actions</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                News
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
  )
}
