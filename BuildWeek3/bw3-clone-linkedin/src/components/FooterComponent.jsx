import React from 'react'
import {Row, Col, Container, Nav, NavDropdown, Navbar, Form} from 'react-bootstrap'
/* import {Link} from 'react-router-dom' */

export default function FooterComponent() {
  return (
    <>
      <footer className='mt-3'>
        <Container>
          <Row className='mb-2'>
            <Col xs={6}>
              <Container fluid>
              <Row>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Informazioni</p></Col> {/* <Link to={'/'}> */}
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Accessibilità</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Talent Solutions</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Linee guida della community</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Carriera</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Soluzioni di marketing</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'>
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
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Opzioni per gli annunci pubblicitari</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Pubblicità</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Sales Solutions</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Mobile</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Piccole Imprese</p></Col>
                <Col xs={6} md={4} lg={4} xl={4} xxl={4} className='mb-1'><p>Centro sicurezza</p></Col>
              </Row>
              </Container>
            </Col>
            <Col xs={6}>
              <Container fluid>
                <Row>
                  <Col xs={12} md={8} lg={8} xl={8} xxl={8} id='RightPartFooterLeftSide'>
                    <ul>
                      <li className='d-flex align-items-start'>
                        <div className='pe-2'><i className="bi bi-question-circle-fill"></i></div>
                        <div>
                          <p>Domande?</p>
                          <p>Visita il nostro centro assistenza</p>
                        </div>
                      </li>
                      <li className='d-flex align-items-start'>
                        <div className='pe-2'><i className="bi bi-gear-fill"></i></div>
                        <div>
                          <p>Gestisci il tuo account e la tua privacy</p>
                          <p>Vai alle impostazioni</p>
                        </div>
                      </li>
                      <li className='d-flex align-items-start'>
                        <div className='pe-2'><i className="bi bi-shield-shaded"></i></div>
                        <div>
                          <p>Trasparenza sui contenuti consigliati</p>
                          <p>Scopri di più sui contenuti consigliati.</p>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={12} md={4} lg={4} xl={4} xxl={4}>
                  <Form className='formLingue'>
                    <Form.Group controlId="languageSelect">
                      <Form.Label>Seleziona lingua:</Form.Label>
                      <Form.Select aria-label="Seleziona lingua" className='border border-black shadow-none'>
                        <option value="it">Italiano (Italiano)</option>
                        <option value="en">English (Inglese)</option>
                        <option value="es">Español (Spagnolo)</option>
                        <option value="fr">Français (Francese)</option>
                        {/* Aggiungi altre lingue */}
                      </Form.Select>
                    </Form.Group>
                  </Form>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <p>LinkedIn Corporation <i className="bi bi-c-circle"></i> 2024</p>
        </Container>
      </footer>
    </>
  )
}
