import React from 'react'
import HomeProfileComponent from '../components/Home/HomeProfileComponent'
import HomePostComponent from '../components/Home/HomePostComponent'
import HomeNewsComponent from '../components/Home/HomeNewsComponent'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Container className='py-4 px-5'>
        <Row>
          <Col xs={12} md={3}>
            <HomeProfileComponent />
          </Col>
          <Col xs={12} md={5}>
            <HomePostComponent />
          </Col>
          <Col xs={12} md={4}>
            <HomeNewsComponent />
          </Col>
        </Row>
      </Container>
    </>
  )
}
