import React, { useState } from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, OverlayTrigger, Popover, Row, Collapse, Button } from 'react-bootstrap'


export default function HomeNewsComponent() {

  function alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

    const [open, setOpen] = useState(false);

  return (
    <>
    <Container className='border rounded py-3 my-3'>     
     <div className='HomeNewsComponentSidebar'>
      <div className='d-flex justify-content-between align-items-center'>
        <h6>LinkedIn Notizie</h6> 
        <OverlayTrigger
          trigger="click"
          key= {1}
          placement='left'
          overlay={
        <Popover id={`popover-positioned-left`}>
          <Popover.Body>
            <p className='m-0'>Queste sono le principali notizie e conversazioni del giorno. <span className='text-primary cursor-pointer'>Scopri</span> come vengono selezionate.</p> 
          </Popover.Body>
        </Popover>
          }
        >
          <button className='border-0 bg-transparent'><i className="bi bi-info-square-fill fs-6"></i></button>
        </OverlayTrigger>
        
      </div>
      <ul className='fs-6 text-decoration p-0'>
        <li>I 15 lavori in più rapida crescita in Italia <br />
          <p className='d-flex align-items-center text-secondary'>Notizie principali <i className="bi bi-dot"></i> 227 lettori</p></li>
        <li>Che 2023 è stato per il mercato del libro <br />
           <p>10 ore fa</p></li>
        <li>Verso la doggy bag obbligatoria <br />
        <p>3 giorni fa</p></li>
        <li>Selezioni aperte in Vaticano <br />
        <p>3 giorni fa</p></li>
        <li>La protesta degli agricoltori si allarga <br />
        <p>4 giorni fa</p></li>
        <Collapse in={open}>
        <div id="example-collapse-text">
        <li>I 15 lavori in più rapida crescita in Italia <br />
          <p className='d-flex align-items-center text-secondary'>Notizie principali <i className="bi bi-dot"></i> 227 lettori</p></li>
        <li>Che 2023 è stato per il mercato del libro <br />
           <p>10 ore fa</p></li>
        <li>Verso la doggy bag obbligatoria <br />
        <p>3 giorni fa</p></li>
        <li>Selezioni aperte in Vaticano <br />
        <p>3 giorni fa</p></li>
        <li>La protesta degli agricoltori si allarga <br />
        <p>4 giorni fa</p></li>
        </div>
        </Collapse>
        <button onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className='d-flex align-items-center border-1 rounded'>
            {
              !open ? 'Show more' : 'Mostra meno'
            }            
        </button>
      </ul>            
     </div>
     </Container>


     <footer className='mt-3'>
        <Container>
          <Row className='mb-2'>
            <Col xs={11}>
              <Container fluid>
              <Row>
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1 text-end text-secondary'><p>Informazioni</p></Col> {/* <Link to={'/'}> */}
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1 text-secondary'><p>Accessibilità</p></Col>
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1 d-flex align-items-center justify-content-end pe-0 text-secondary'><p className=''>Centro assistenza</p></Col>
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1'>
                  <Navbar>
                    <Navbar.Collapse id="navbarCollapseFooter">
                      <Nav>
                        <NavDropdown
                          id="navDropdownFooter"
                          title="Privacy e condizioni"
                        >
                          <NavDropdown.Item href="#action/3.1">Informativa sulla privacy</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Contratto di licenza</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Termini e condizioni delle pagine</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.5">Informativa sui cookie</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.6">Informativa sul copyright</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Col> 
                <Col xs={12} md={12} lg={12} xl={12} xxl={12} className='mb-1 text-center text-secondary'><p>Opzioni per gli annunci pubblicitari</p></Col>
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1 d-flex align-items-center justify-content-end pe-0 text-secondary'><p>Pubblicità</p></Col>
                <Col xs={6} md={6} lg={6} xl={6} xxl={6} className='mb-1'>
                  <Navbar>
                    <Navbar.Collapse id="navbarCollapseFooter">
                      <Nav>
                        <NavDropdown
                          id="navDropdownFooter"
                          title="Servizi alle aziende"
                        >
                          <NavDropdown.Item href="#action/3.1">Assumi su Linkedin</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Vendi con Linkedin</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Offerta di lavoro gratuita</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Fai pubblicità su Linkedin</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.5">Impara con Linkedin</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.6">Centro amministrazione</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Col> 
                <Col xs={8} md={8} lg={8} xl={8} xxl={8} className='mb-1 text-end pb-1 text-secondary'><p>Scarica l'app Linkedin</p></Col>
                <Col xs={4} md={4} lg={4} xl={4} xxl={4} className='mb-1 pb-1 text-secondary'><p>Altro</p></Col>
              </Row>
              </Container>
            </Col>
          </Row>
          <p className='text-center'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" className='immagineLogoLinkedin' alt="longo linkedin" /> LinkedIn Corporation <i className="bi bi-c-circle"></i> 2024</p>
        </Container>
      </footer>

     {/* elenco di notizie */}
     {/* piccolo footer */}
    </>
   
  )
}
