import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <Navbar expand="lg">
        <Container>
        <Link to="/" className='navbar-brand'>Remote Jobs Search</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favourites" className='nav-link'>Favourites</Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
