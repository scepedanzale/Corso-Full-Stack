import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import MainProfileComponent from '../components/MainProfileComponent'
import InfoComponent from '../components/InfoComponent'
import AsideComponent from '../components/AsideComponent'
import { Col, Container, Row } from 'react-bootstrap'

export default function ProfilePage() {
  return (
    <>
        <NavbarComponent/>

        <Container className='py-4'>
            <Row>
                <Col xs={12} md={8}>
                    <MainProfileComponent/>
                    <InfoComponent/>
                </Col>
                <Col xs={12} md={4}>
                    <AsideComponent/>
                </Col>
            </Row>
        </Container>
        
        <FooterComponent/>
    </>
  )
}
