import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddComment extends Component{
    state = {
        hidden: false
    }
  render(){
    return (
        <>
            <Button variant='warning' className='mb-2' onClick={()=>this.setState((prevState)=>({hidden: !prevState.hidden}))}>Aggiungi recensione</Button>
            <Form className={this.state.hidden ? 'd-block my-1 text-center' : 'd-none'}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Aggiungi un commento" />
                    <Form.Control type="number" placeholder="Dai un voto da uno a 5" maxLength={5} />
                    
                </Form.Group>
                <Button variant="outline-dark btn-sm" type="button">
                    INVIA
                </Button>
        </Form>
        </>
      )
  }
}
