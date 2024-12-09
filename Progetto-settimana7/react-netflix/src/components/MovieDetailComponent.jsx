import React from 'react'
import { useState,  useEffect } from 'react'
import { Container, Row, Col, ListGroup, Image, Alert, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

export default function MovieDetailComponent({endpoint}) {

    const {id} = useParams()

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(endpoint+id)
        .then(response => response.json())
        .then(json => {
            setMovie(json);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            setErrMsg(true)
        })
    }, [endpoint, id])

    return (
    <Container>
        {errMsg && 
            <Alert variant='danger'>
                Errore nel caricamento dati!
            </Alert>}

        {loading && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        {movie && 
        <Container className='d-flex justify-content-center my-5'>
            <Row className='align-items-center'>
                <Col xs={12} className='text-center mb-3'>
                    <h1>{movie.Title}</h1>
                </Col>
                <Col>
                    <Image src={movie.Poster}></Image>
                </Col>
                <Col>
                    <ListGroup className="list-group-flush">
                        <p>Genere: {movie.Genre}</p>
                        <p>Regista: {movie.Director}</p>
                        <p>Attori: {movie.Actors}</p>
                        <p>Durata: {movie.Runtime}</p>
                        <p>Anno: {movie.Year}</p>
                    </ListGroup>
                </Col>
                <Col xs={12} className='mt-3 fs-5'>
                    {movie.Plot}
                </Col>
            </Row>
        </Container>
        }
    </Container>
  )
}
