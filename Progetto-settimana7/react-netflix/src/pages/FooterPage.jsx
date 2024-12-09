import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function FooterPage() {
  return (
    <footer>
          <Container fluid className="d-flex justify-content-center">
          <Row>
            <Col xs={12} className="">
              <Row>
                <Col xs={12} className="text-left mb-2">
                  <i className="fa fa-facebook footer-icon"></i>
                  <i className="fa fa-instagram footer-icon"></i>
                  <i className="fa fa-twitter footer-icon"></i>
                  <i className="fa fa-youtube footer-icon"></i>
                </Col>
              </Row>
              <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                <Col>
                  <Row>
                    <Col xs={12} className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio and Subtitles</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Media Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Privacy</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Contact us</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio Description</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Investor Relations</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Legal Notices</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Help Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Jobs</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Cookie Preferences</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Gift Cards</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Terms of Use</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Corporate Information</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center mb-2">
                  <Button className="footer-button rounded-0 mt-3">
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center my-3 copyright">
                  © 1997-2022 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
          </Container>
    </footer>
  )
}
