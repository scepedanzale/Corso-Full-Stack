import React, {Component} from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Error from './Error'

export default class CommentList extends Component {
  state = {
    hidden: false
  }
  deleteComment = async (id) => {
      try{
          const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ id, 
          {
              headers: {
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThkYjY0MDFmYWNmNjAwMTgzYTYzZmQiLCJpYXQiOjE3MDUwNzA1OTMsImV4cCI6MTcwNjI4MDE5M30.usiGllA0Ur5MlilSPlG8lCjp35pv1aOhUxi_tD-t6Ls'
              },
              method: 'DELETE'
          })
          if(response.ok){
            alert('Commento Eliminato')
          }else {
            alert('Errore: commento non eliminato')
          }
      }catch(e){
        console.log(e)
        alert('Errore: commento non eliminato')
      }
  }
  render(){
    return (
    <>
      <Button variant='warning' onClick={()=>this.setState((prevState)=>({hidden: !prevState.hidden}))}>Recensioni utenti</Button>
        {this.props.error && <Error/>}
      <ListGroup className={this.state.hidden ? 'd-block mt-1 border border-1 border-warning' : 'd-none'}>
          {   
              this.props.comment.map(c =>(
                  <ListGroup.Item>
                    {console.log(c)}
                    <p>"{c.comment}"</p>
                    <p>{c.author}</p>
                    <p>VOTO: {c.rate}/5</p>
                    <Button variant='danger' size='sm' onClick={()=>this.deleteComment(c._id)}>Elimina</Button>
                </ListGroup.Item>
              ))
          }
      </ListGroup>
    </>
      
  )
  }
  
}
