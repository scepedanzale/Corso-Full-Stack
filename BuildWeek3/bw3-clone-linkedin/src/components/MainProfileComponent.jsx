import React, { useEffect, useState } from 'react'
import { Image, Row, Col, Button, Dropdown, Modal, Form} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../MainStyle.css'
import { apiKey, userProfileUrl } from '../config/Dati'
import { useDispatch, useSelector } from 'react-redux'
import { addUserProfile, setImgProfile, UserExperience, setImgProfile2 } from '../redux/actions/actions'
import InfoComponent from './InfoComponent'
export default function MainProfileComponent() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addUserProfile())
  },[])

  const user = useSelector(state => state.profile.user)
  console.log(user)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageData, setImageData] = useState(null);
  const [file, setFile] = useState(null);

  const ProfilePic = useSelector(state => state.profile.imageProfile[0])
  /* const [image, setImage] = useState(null) */

  /* let localImageUrl

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    localImageUrl = window.URL.createObjectURL(selectedImage);
    console.log(localImageUrl)
  }; */

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
  /* const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('profileImage', image);
  
  }; */

  /* const imageProfile = useSelector(state => state.imageProfile)
  console.log(imageProfile)
 */
  return (
     user && user.length > 0 && (
        <div className='border p-3 rounded position-relative' >
          <div className='mainBg text-end position-absolute'>
             
            <Button className='btnIconCamera border position-absolute' onClick={handleShow}>
               <i className="bi bi-camera-fill text-primary"></i>
            </Button>   
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

          <div className='d-flex justify-content-between align-items-end mt-3'>
            {
              ProfilePic && (
                <Image 
              src={ProfilePic}
              roundedCircle 
              width={130} 
              height={130} 
              className = "border border-3 border-dark ms-3 z-1">
            </Image>
              )
            }
            
            <i className="bi bi-pencil"></i>
          </div>
          <div>
            <Row className='my-2 mt-3 rowProfile'>
              <Col xs={8} className="lh-1">
                <div className="d-flex align-items-baseline">
                  <p className='mb-1 fw-bold fs-5'>{user[0].name} {user[0].surname}</p>
                  <Button variant="outline-primary" className="btnCheck d-flex align-items-center justify-content-center mx-3 px-1 py-0 pe-2">
                    <i className="bi bi-shield-check mx-1 fw-bold boldIcon"></i>
                    <p className='m-0 fw-semibold'>Inizia la verifica</p>
                  </Button>
                </div>

                <p className='userBio'>{user[0].bio}</p>
                <div className='d-flex'>
                  <p className='text-muted'>{user[0].area} &middot;</p>
                  <a href='#' className='text-primary text-decoration-none mx-2 fw-bold'> Informazioni di contatto</a>
                </div>
                <a href='#' className='text-primary text-decoration-none fw-bold'>35 collegamenti</a>
              </Col>
              <Col xs={4} >
                <div className="d-flex align-items-center">
                  <Image
                    src='../assets/logoUniVita.jpeg'
                    roundedCircle
                    width={50} height={50}
                  />
                  <p className='lh-1 ms-2 mb-0 fw-semibold'>{user[0].title}</p>
                </div>
              </Col>
            </Row>
            <div className="d-flex p-0 ButtonContainer mt-3 my-2">
              <Dropdown className="d-inline">
                <Dropdown.Toggle className="btnDisponibile mx-3 px-3 py-1" variant="primary" id="dropdown-basic" noCaret>
                  Disponibile per
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Selezione del personale</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Servizi offerti</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="outline-primary" className="btnCheck mx-3 px-3 py-1"><p className='m-0 fw-semibold'>Aggiungi sezione del profilo</p></Button>
              <Button variant="outline-primary" className="OtherButton mx-3 px-3 py-1">Altro</Button>
            </div>

          </div>

          {/* parte codice card che puzza */}
          <Carousel className="cardProfilo d-flex ">
            {/* aggiungere rounded + line-height alla card da css */}

            <Carousel.Item className='Card1 w-100'>
            <div className='w-75 p-3 border rounded-3 mycarouselItem mycarouselItem1'>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div>
                    <p className="fw-bolder"> Disponibile a lavorare</p>
                    <p>Ruoli di Full Stack Developer... </p>
                  </div>
                  <a href="#" className="fw-bold" style={{ textDecoration: 'none' }} > Mostra dettagli</a>
                </div>
                <i className="bi bi-pencil"></i>
              </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className='Card2 rounded-3 myCarouselBg w-100'>
            <div className='w-75 p-3 border rounded-3 mycarouselItem'>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <p classNama="fw-bolder"> Fai sapere che stai facendo selezione </p>
                  <p> e attrai candidati qualificati </p>
                </div>
                <i className="bi bi-x-lg"></i>
              </div>
              <a href="#" className="fw-bold" style={{ textDecoration: 'none' }}> Inizia </a>
              </div>
            </Carousel.Item>

            <Carousel.Item className='Card3 rounded-3 myCarouselBg w-100'>
              <div className='w-75 p-3 border rounded-3 mycarouselItem'>
              <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <p classNama="fw-bolder"> Metti in risalto le tue competenze </p>
                <p> e trova il lavoro dei tuoi sogni</p>
              </div>
              <i className="bi bi-x-lg"></i>
              </div>
              <a href="#" className="fw-bold" style={{ textDecoration: 'none' }}> Inizia </a>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
    )
   )
}
