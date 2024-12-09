import React, { useEffect,  useState} from 'react'
import {Container, Row, Col, Card, Button, Spinner, Alert, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function TvShowsComponent({endpoint}) {

    
    const navigate = useNavigate()
    
    const [movies, setMovies] = useState({});
    const [query, setQuery] = useState('')
    const [film, setFilm] = useState('')
    
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(()=>{
        setLoading(true)

        fetch(endpoint + film)
        .then(response => response.json())
        .then(json => {
            setMovies(json);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            setErrMsg(true)
        })
    }, [endpoint, film])

    const searchFilm = (e) => {
        setFilm(query)
        e.preventDefault()
    }

  return (
    <Container fluid>
        <h1 className='mt-3'>Tv Shows</h1>
        {errMsg && 
            <Alert variant='danger'>
                Errore nel caricamento dati!
            </Alert>
        }
        {loading && 
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>}

        <Row className='p-5'>
            <Col xs={12}>
                <Form onSubmit={e=>searchFilm(e)}>
                    <Row>
                        <Col xs={8} md={10}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cerca film..." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button 
                                variant="outline-danger" 
                                type="button" 
                                className='w-100'
                                onClick={searchFilm}
                            >
                                Cerca
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            {movies.Search && movies.Search.map((movie)=>(
                <Col key={movie.id} xs={12} sm={6} md={4} lg={2} className='my-4 text-center image-card'>
                    <Card>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant='outline-dark' onClick={()=> navigate('/movie-detail/'+ movie.imdbID)}>Vedi dettagli</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
