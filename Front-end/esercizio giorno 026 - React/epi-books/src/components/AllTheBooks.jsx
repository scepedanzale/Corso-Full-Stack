import React, { Component } from 'react';
import Horror from '../books/horror.json';
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json';
import Scifi from '../books/scifi.json';
import Romance from '../books/romance.json';
import {Col, Container, Row, Button, Form} from 'react-bootstrap';
import BooksList from './BooksList';
import Loading from './Loading';


export default class AllTheBooks extends Component{

    state = {    // ogni volta che manipolo dati uso state: per non avere problemi con caricamento (anche se ora non mi serve)
                 // non usando state, se ci mette più tempo a caricare i dati rispetto al DOM, i dati non li vedrò
        books: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading: true})
        this.setState({ 
            books: [ // SPREAD OPERATOR: con '...' prendo solo il contenuto dell'oggetto senza il contenitore
                    /* ...this.state.books,  
                    horror: Horror,
                    fantasy: Fantasy,
                    history: History,
                    scifi: Scifi,
                    romance: Romance */
                    ...Fantasy, ...Horror, ...History, ...Scifi, ...Romance
            ],
            loading: false
        })   
    }
    
    render(){
        return(
            <Container>
            <Row className='my-5'>
                    <Form.Label>Search Book</Form.Label>
                    <Col>
                        <Form.Control type='text' placeholder='Cerca...'></Form.Control>
                    </Col>
                    <Col>
                        <Button>Search</Button>
                    </Col>
            </Row>
            <h3>Total Books: {this.state.books.length}</h3>
            <Row>
                {this.state.loading && <Loading/>}
                <BooksList books={this.state.books}></BooksList>
            </Row>

            </Container>
        )
    }
}
