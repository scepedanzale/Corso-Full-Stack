import React, { useEffect, useState } from 'react'
import { Container,Image, Modal, Form } from 'react-bootstrap'
import '../../homeProfile.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { setImgProfile } from '../../redux/actions/actions'

export default function HomeProfileComponent() {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageData, setImageData] = useState(null);
  const [file, setFile] = useState(null);

  const username = useSelector(state=>state.profile.user)
  const imgProfile = useSelector(state=>state.profile.imageProfile)
  
  console.log(username)

  const handleImageChange = (e) => {
    //

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Creazione di un oggetto FormData
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Puoi inviare formData al server se necessario
      // Ad esempio, inviare formData tramite una richiesta fetch
    }
  };

  const handleUpload = () => {
    // Qui puoi aggiornare lo stato con i dati dell'immagine se necessario
    // Per esempio, potresti fare qualcosa come setImageData(formData.get('image'))

    // In questo esempio, l'immagine viene convertita in URL di dati base64 e memorizzata nello stato
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { 
        setImageData(reader.result);
        console.log(imageData)
        dispatch(setImgProfile(reader.result))
        /* setTimeout(() => {
          dispatch(setImgProfile(reader.result))
        },1000) */
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    username &&
    <div className='home-profile-global'>

    <div className='border rounded'>
      <div className='border-bottom position-relative'>
         <div className='mainBgHome position-absolute'>
          {/* background con il banner */}
        </div>
        <div className='d-flex justify-content-center pt-3'>
          <Image 
              src={imgProfile}
              roundedCircle 
              width={70} 
              height={70} 
              className = "border border-3 border ms-3d-block mb-2 z-1">
          </Image>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                    <Modal.Title>Scegli immagine del profilo</Modal.Title>
                  </Modal.Header>
            <Modal.Body>

              <Form.Group onChange={handleImageChange} controlId="formFile" className="mb-3">
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={ ()=>{handleClose();}}>Close</Button>
              <Button variant="primary" onClick={ ()=>{handleUpload();}}>Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className='text-center mb-2'>
          <h6 className='fw-semibold mb-0'>Ti diamo il benvenuto </h6>
          <Link to={'/profile'} className='fw-semibold mb-0 d-block text-decoration-none text-black fs-6'>{username[0].name} !</Link>  {/* al click fa alla pagina profilo */}
          <a id='link-add-photo-home' className='text-primary text-decoration-none ' onClick={handleShow}>Aggiungi una foto</a>
        </div>
      </div>
      <Container className='pb-2'>
        <div className='border-bottom d-flex justify-content-between my-3'>
          <div>
            <p className='text-secondary mb-0'>Collegamenti</p>
            <p className='fw-semibold'>Espandi la tua rete</p>
          </div>
          <div>
            <p className='text-primary fw-semibold'>24</p>
          </div>
        </div>

        <div className='border-bottom '>
          <p className='text-secondary mb-0 lh-1'>Accedi a strumenti e informazioni in esclusiva</p>
          <p className='fw-semibold d-flex align-items-center'> <i className="bi bi-square-fill text-warning me-2"></i> Prova Premium per 0 EUR</p>
        </div>

        <div className='d-flex align-items-center align-content-center mt-2'>
          <i className="bi bi-bookmark-fill fs-6"></i>
          <p className='fw-semibold mb-0 ms-2'>I miei elementi</p>
        </div>
      </Container>
    </div>

{/* prova con la card di bootstrap react */}

    {/* <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" className='z-0' src="https://t4.ftcdn.net/jpg/02/40/63/55/240_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg" />
      <Card.Body>
        <div className='d-flex justify-content-center'>
          <Image 
                src={username[0].image}
                roundedCircle 
                width={80} 
                height={80} 
                className = "border border-3 border-dark ms-3d-block img-profile-home z-1">
          </Image>
        </div>
        <Card.Title>Ti diamo il benvenuto</Card.Title>
        <Card.Text>
          Aggiungi una foto 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='border-bottom d-flex justify-content-between my-3'>
        <div>
          <p className='text-secondary mb-0'>Collegamenti</p>
          <p className='fw-semibold'>Espandi la tua rete</p>
        </div>
        <div>
          <p className='text-primary fw-semibold'>24</p>
        </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className='text-secondary mb-0 lh-1'>Accedi a strumenti e informazioni in esclusiva</p>
          <p className='fw-semibold d-flex align-items-center'> <i className="bi bi-square-fill text-warning me-2"></i> Prova Premium per 0 EUR</p>
        </ListGroup.Item>
        <ListGroup.Item className='d-flex align-items-center align-content-center mt-2'>
          <i className="bi bi-bookmark-fill fs-6"></i>
          <p className='fw-semibold mb-0 ms-2'>I miei elementi</p>
        </ListGroup.Item>
      </ListGroup>
    </Card> */}
      

    <Container className='border rounded pt-3 my-3 box-link-welcome'>
      <div className='border-bottom'>
       <p className='fw-semibold text-primary mb-2'>Gruppi</p> 
       <div className='d-flex justify-content-between align-items-center mb-2'>
        <p className='fw-semibold text-primary mb-0'>Eventi</p>
        <button className='btn-plus-welcome align-self-start'><i className="bi bi-plus"></i></button>
       </div>
        <p className='fw-semibold text-primary '>Hashtag seguiti</p>
      </div>
      <div>
        <p className='fs-6 text-secondary text-center my-2 py-1 fw-semibold text-decoration-none'>Scopri di più</p>
      </div>
    </Container>
    </div>
    

    
  )
}
