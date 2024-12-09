import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function BooksList({books}) {
  return (
    <Container>
            <Row id='books'>
                {books.map((book, index)=>(
                    <Col xs='6' lg='4' xl='3' xxl='2' className='my-3' key={index}>
                        <SingleBook book={book}></SingleBook>
                    </Col>
                ))}
            </Row>
        </Container>
  )
}
