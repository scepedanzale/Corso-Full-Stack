import React, { useEffect, useState } from 'react'
import { Container, Image, Row, Col, Button, Modal, Form, ModalBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../../homePost.css'
import { getPostList, createPost } from '../../redux/actions/actions'


export default function HomePostComponent() {

  const imgProfile = useSelector(state=>state.profile.imageProfile)
  const user = useSelector(state=>state.profile.user)
  console.log(user)

  const dispatch = useDispatch()
  const postList = useSelector(state => state.home.homepage[0])
  console.log(postList)

  const [postSave, setPostSave] = useState({text:''});
  console.log(postSave)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect (() => {
    dispatch(getPostList())
    // dispatch(createPost())
  }, [])

//   const value = postList.createdAt

// const humanTimeDiff = value => {
//     const date = Date.parse(value);

//     if(isNaN(date)) {
//         return '';
//     }

//     const now = new Date();
//     let delta = parseInt((now.getTime() - date) / 1000, 10);

//     delta = delta + (now.getTimezoneOffset() * 60);

//     if(delta < 60) {
//         return 'less than a minute ago';
//     }
//     if(delta < 120) {
//         return 'about a minute ago';
//     }
//     if(delta < (60 * 60)) {
//         return `${parseInt(delta / 60, 10).toString()} minutes ago`;
//     }
//     if(delta < (120 * 60)) {
//         return 'about an hour ago';
//     }
//     if(delta < (24 * 60 * 60)) {
//         return  `about ${parseInt(delta / 3600, 10).toString()} hours ago`; 
//     }
//     if(delta < (48 * 60 * 60)) {
//         return 'a day ago';
//     }
//     return `${parseInt(delta / 86400, 10).toString()} days ago`;

// };


  return (
    <>
    <Container className='border rounded p-2'>
      <div className='d-flex'>
        <Image 
          src={imgProfile}
          roundedCircle 
          width={60} 
          height={60} 
          className = "border border-3 ms-1">
        </Image>
        <Button className='btn-post-home text-secondary px-3 py-1 ms-2 text-start border-secondary'  onClick={handleShow}> Avvia un post </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control 
            className='border-0'
            as="textarea" 
            rows={3}
            placeholder='Di cosa vorresti parlare?'
            onChange={e => setPostSave({...postSave, text: e.target.value })}
            >
            </Form.Control>
          </Form>
          <div>
            <Button className='btn-smile'><i className="bi bi-emoji-smile"></i></Button>
            <Row className='btn-post-grey'>
              <Button><i className="bi bi-card-image"></i></Button>
              <Button><i className="bi bi-calendar3"></i></Button>
              <Button><i className="bi bi-stars"></i></Button>
              <Button><i className="bi bi-three-dots"></i></Button>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="primary" 
            onClick={() => dispatch(createPost(postSave))}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='btn-post-create mt-2'>
        <button className='border-0 py-2 rounded fw-semibold'><i className="bi bi-card-image me-2 text-primary"></i>Contenuti multimediali</button>
        <button className='border-0 py-2 mx-2 rounded fw-semibold'><i className="bi bi-calendar3 me-2 text-warning"></i>Evento</button>
        <button className='border-0 py-2 rounded fw-semibold'><i className="bi bi-file-text me-2 text-danger text-center"></i>Scrivi un articolo</button>
      </div>
    </Container>
    
  {postList.map((post, index) => (
    post.user.image && post.user.name && post.user.surname ? (
      <Container key={index} className='border rounded mt-3'>
      <Row className=' d-flex justify-content-between '>
          <Col xs={12} md={2} className='d-flex'>
            <Image 
              src={post.user.image}
              roundedCircle 
              width={60} 
              height={60} 
              className = "border border-3 mt-2 me-2">
            </Image>
          </Col>
          <Col xs={12} md={7} className='info-account p-0'>
            <p className='mb-0 fs-6 fw-semibold'>{post.user.name} {post.user.surname}</p>

            <p className='mb-1'>{post.createdAt.slice(0, 10)} <i className="bi bi-dot"></i> <i className="bi bi-globe-americas"></i></p>
          </Col>
          <Col xs={12} md={2} className='btn-close-3dots-post p-0 text-end me-2'>
            <button><i className="bi bi-three-dots"></i></button>
            <button><i className="bi bi-x ms-1"></i></button>
          </Col>
      </Row>

      <Row className='post-content mt-2 mx-2 border-bottom pb-2'>
        {post.text}
      </Row>

      <Row className='btn-post-active p-0'>
        <button className='text-secondary border-0 py-2'><i className="bi bi-hand-thumbs-up"></i>Consiglia</button>
        <button className='text-secondary border-0'><i className="bi bi-chat-right-text"></i>Commenta</button>
        <button className='text-secondary border-0'><i className="bi bi-arrow-repeat"></i>Diffondi il post</button>
        <button className='text-secondary border-0'><i className="bi bi-send-fill"></i>Invia</button>
      </Row>
    </Container>
    ) : null
  ))} 

    </>
  )
}
