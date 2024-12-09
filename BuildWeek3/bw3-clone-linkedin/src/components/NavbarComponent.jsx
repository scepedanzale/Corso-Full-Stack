import React from 'react';
import {Container, Row, Col, Form, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (

<>
 
 <Navbar  data-bs-theme="light" className='defaultNavbar bg-white border-bottom border-tertiary p-1 justify-content-center sticky-top'>
   <div className='m-0 d-flex justify-content-center'>
      <Navbar.Brand href="#" className='mx-1'>
            <img className='logo' src="/icon.png" alt=""  />
      </Navbar.Brand>
    <Nav className="m-0 me-auto top-nav p-0 align-items-center">
      <Nav.Link href="#home" className='mx-3'><div className='d-flex d-lg-none justify-content-center '>
                   <i className="bi bi-search"></i>
                 </div><span className='text-center d-none d-md-block d-lg-none'> Cerca</span></Nav.Link>
      <Form className="d-flex w-50 d-none d-lg-block" >
        <Form.Control
          type="search"
          placeholder="Cerca"
          className="me-5 input-bar"
          aria-label="Search"
        />
      </Form>
       <Link to={'/'} href='/' className='mx-3 nav-link'><div className='d-flex justify-content-center '>
                   <i className="bi bi-house-fill"></i>
                 </div>
                 <span className='text-center d-none d-md-block'> Home</span></Link>
       <Nav.Link href="#features" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-people-fill"></i>
                 </div>
                 <span className='text-center d-none d-md-block'> Rete</span> </Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-briefcase-fill"></i>
                 </div>
                 <span className='text-center d-none d-md-block'> Lavoro</span> </Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-chat-right-dots-fill"></i>
                 </div>
                 <span className='text-center d-none d-md-block'> Messaggistica</span> </Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'>  <div className='d-flex justify-content-center '>
                   <i className="bi bi-bell-fill"></i>
                 </div>
                 <span className='text-center d-none d-md-block'> Notifiche</span> </Nav.Link>
      <Link to={'/profile'}className='mx-3 nav-link'>  <div className='d-flex justify-content-center '>
                   <i className="bi bi-person-circle"></i>
                 </div> 
                 <span className='text-center d-none d-md-block'>tu</span></Link>
       <div className='nav-right d-flex align-items-center justify-content-center'>
        <Nav.Link href="#home" className=' mx-3'><div className='d-flex justify-content-center '>
        <i className=" bi bi-list"></i>
                  </div>
                  <span className=' text-center d-none d-md-block'>Aziende</span></Nav.Link>
        <Nav.Link href="#features" className='mx-3 '><div className='d-flex justify-content-center '>
                  <span className='provapremium'> Prova Premium per 0 EUR</span> 
                  </div> </Nav.Link>
       </div>
     </Nav>
   </div>
 </Navbar>
 </>


  );
}
