import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

export default class CommentArea extends Component {
    state = {
        comment: [],
        hidden: false,
        errorMsg: false
    }
    componentDidMount(){
        fetch('https://striveschool-api.herokuapp.com/api/comments/'+ this.props.book.asin,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThkYjY0MDFmYWNmNjAwMTgzYTYzZmQiLCJpYXQiOjE3MDUwNzA1OTMsImV4cCI6MTcwNjI4MDE5M30.usiGllA0Ur5MlilSPlG8lCjp35pv1aOhUxi_tD-t6Ls'
            }
        })
        .then(response => response.json())
        .then(json => this.setState({comment: json}))
        .catch(err => {console.log(err)
            this.setState({errorMsg: true})
        })
    }
  render() {
    
    
    return (
        <>
            <Card.Text className='recensioni'>
                <AddComment book={this.props.book}/>
                <CommentList 
                    comment={this.state.comment} 
                    error={this.state.errorMsg}
                />
              
                
            </Card.Text>
            {/* <CommentList comments={this.state.comment}/> */}
        </>
    )
  }
}
