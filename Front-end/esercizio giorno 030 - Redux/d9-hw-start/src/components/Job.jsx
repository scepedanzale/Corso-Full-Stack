import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { addFavourite, removeFavourite } from "../actions";

const Job = ({ data }) => {

  const dispatch = useDispatch()

  const favourites = useSelector(state => state.favourites)
  const company = favourites.find( c => c.company_name === data.company_name)
  
  return(
    <ListGroup.Item>
      <Row className="mx-0 mt-3 p-3">
        <Col xs={6} className='d-flex align-items-center'>
          {!company ? 
            (<Button variant="" type="button" onClick={()=> dispatch(addFavourite(data))}>
              <i className="bi bi-heart text-danger fs-4"></i>
            </Button>)
            :
            (<Button variant="" type="button" onClick={()=> dispatch(removeFavourite(data))}>
              <i className="bi bi-heart-fill text-danger fs-4"></i>
            </Button>)
          }
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={6} className='d-flex align-items-center'>
          <a href={data.url} target="_blank" rel="noreferrer">{data.title}</a>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default Job
