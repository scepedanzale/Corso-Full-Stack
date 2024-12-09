import React from 'react'
import { Container, ListGroup, Row, Button, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function FavouritesComponent() {
    const favourites = useSelector(state => state.favourites)
    const navigate = useNavigate();

  return (
      <Container fluid className='p-5'>
        <Row className='mb-2'>
          <Col>
            <Button variant='outline-primary' type='button' onClick={()=>navigate(-1)}>Back</Button>          
          </Col>
          <Col xs={10}>
            <h1>Favourites Company</h1>
          </Col>
        </Row>
        <ListGroup>
          {favourites.map((f, i) => (
            <ListGroup.Item key={i}>
              <Link to={`/${f.company_name}`}>{f.company_name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
  )
}
