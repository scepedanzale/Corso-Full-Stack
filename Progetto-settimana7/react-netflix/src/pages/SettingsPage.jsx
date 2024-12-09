import React from 'react'
import {Container, Row, Col, Image, Form} from 'react-bootstrap'

export default function SettingsPage() {
  return (
    <Container>
            <Row className="title">
                <h1 className="text-light fw-normal">Edit Profile</h1>
            </Row>
            <Row className="row main border-top border-bottom border-1">
                <Col className="col-3 mt-3">
                    <Image src="imgs/avatar.png" className="img-fluid" alt=""></Image>
                </Col>
                <Col className="col">
                    <Row className="row border-bottom border-1 py-3">
                        <p className="">Strive Student</p>
                        
                           <Form action="">
                            <caption>Languages:</caption> <br></br>
                            <select name="languages" id="languages">
                                <option value="English">English</option>
                                <option value="English">Italian</option>
                                <option value="English">Spanish</option>
                            </select>
                           </Form>
                        
                    </Row>
                    <Row className="row border-bottom border-1 py-3">
                        <p>Maturity Settings:</p>
                        <p className="bg-body-secondary w-50">ALL MATURITY RATINGS</p>
                        <p className="f-small">Show titles of all maturity ratings for this profile.</p>
                        <button className="btn btn-outline-light rounded-0 w-25 f-small "> EDIT</button>
                    </Row>
                    <Row className="row py-3">
                        
                        <Form action="">
                            <caption>Autoplay controls</caption> <br></br>
                            <Form.Check type="checkbox"><span className="ms-1 f-small">Autoplay next episode in a series on all devices. </span></Form.Check> <br></br>
                            <Form.Check type="checkbox"><span className="ms-1 f-small">Autoplay previewes while browsing on all devices.</span></Form.Check>
                        </Form>
                    </Row>
                </Col>
            </Row>
            <Row className="row mt-4 px-5">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <button className="btn btn-light rounded-0 px-4 w-100">SAVE</button>
                </Col> 
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <button className="btn btn-outline-light rounded-0 px-4 w-100">CANCEL</button>
                </Col> 
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <button className="btn btn-outline-light rounded-0 px-4 w-100">DELETE PROFILE</button>
                </Col> 
            </Row>
        </Container>
  )
}
