import React from 'react'
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import NewReleases from '../components/NewReleases'
import Trending from '../components/Trending';
import WatchAgain from '../components/WatchAgain';

export default function MainPage({endpoint}) {
  return (
    <>
    <Container fluid className='main pt-3'>
        <Row className='justify-content-between align-items-center'>
            <Col xs={6} className='d-flex'>
                <h2 className='me-3'>Home Page</h2>
                <Dropdown className='border border-1 border-secondary'>
                    <Dropdown.Toggle variant='dark rounded-0' id="dropdown-basic">
                        Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant='dark rounded-0'>
                        <Dropdown.Item href="#">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#">Drama</Dropdown.Item>
                        <Dropdown.Item href="#">Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col xs={6} className='text-end'>
                <i className="fa fa-th-large icons"></i>
                <i className="fa fa-th icons"></i>
            </Col>
        </Row>
    </Container>
    <Container fluid className='main'>
        <Row id='trending-now' className='p-5'>
            <h3>Trending Now</h3>
            <Trending endpoint={endpoint}/>
        </Row>
        <Row id='watch-again' className='p-5'>
            <h3>Watch It Again</h3>
            <WatchAgain endpoint={endpoint}/>
        </Row>
        <Row id='new-releases' className='p-5'>
            <h3>New Releases</h3>
            <NewReleases endpoint={endpoint}/>
        </Row>
    </Container>
    </>
  )
}
