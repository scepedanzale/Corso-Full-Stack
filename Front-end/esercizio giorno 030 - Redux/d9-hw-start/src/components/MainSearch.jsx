import { useState } from "react";
import { Container, Row, Col, Form, ListGroup, Spinner, Alert } from "react-bootstrap";

import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../actions";

const MainSearch = () => {

  const [query, setQuery] = useState("");

  const jobs = useSelector(state => state.jobs.results)
  const loading = useSelector(state => state.jobs.loading)
  const errMsg = useSelector(state => state.jobs.errMsg)

  const dispatch= useDispatch()
 
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getJobs(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            {/* <Button type="button" onClick={handleSubmit}>cerca</Button> */}
          </Form>
        </Col>
        <Col xs={12} className="mx-auto my-5 bg-body-tertiary">
          {loading && 
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
          {errMsg && 
            <Alert variant={'danger'}>
              Errore nel caricamento dati...
          </Alert>
          }
          <ListGroup>
            {jobs && jobs.map(jobData => (
              <Job key={jobData._id} data={jobData} />
            ))} 
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
