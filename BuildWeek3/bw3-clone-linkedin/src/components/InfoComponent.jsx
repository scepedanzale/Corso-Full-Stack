import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import ExperienceComponent from './ExperienceComponent'

export default function InfoComponent() {
  return (
    <>
        {/* Consigliato per te */}
        <Container className='border-1 border rounded-2 p-4 my-2'>
          <p className=' fw-bold fs-5'>Cosigliato per te</p>
          <p className='font-small d-flex align-items-center'><i className="bi bi-eye-fill pe-2"></i> Solo per te</p>
          <Row className='border-1 border rounded-2 p-2 mt-3'>
            <Col xs={2}>

            </Col>
            <Col xs={9}>
              <p className='fw-bold py-2'>Aumenta l'interesse per il tuo profilo</p>
              <p className='font-small'>Invoglia i visitatori a visualizzare il tuo sito web, prenotare 
                un appuntamento e altro con un pulsante personalizzato sul tuo 
                profilo e su LinkedIn.
              </p>
              <p className='font-small'>Milioni di utenti usano Premium</p>
              <Button variant='warning' size='sm' className='rounded-5 fw-bold my-2'>Prova Premium per 0 EUR</Button>
            </Col>
            <Col xs={1} className='py-2'>
              X
            </Col>
          </Row>
        </Container>
        {/* Analisi */}
        <Container className='border-1 border rounded-2 pb-1'>
          <div className='p-4'>
            <p className=' fw-bold fs-5'>Analisi</p>
            <p className='font-small d-flex align-items-center'><i className="bi bi-eye-fill pe-2"></i> Solo per te</p>
            <Row>
              <Col xs={1}>
                <i className="bi bi-people-fill"></i>
              </Col>
              <Col>
                <p className='fw-bold'>visualizzazioni del profilo</p>
                <p className='font-small'>Scopri chi ha visualizzato il tuo profilo.</p>
              </Col>
            </Row>
            
          </div> 
          <Row className=' border-top border-1'>
            <Button variant='' className='fw-bold'>Mostra tutte le analisi</Button>
          </Row>
        </Container>
        {/* Risorse */}
        <Container className='border-1  border rounded-2 pb-1 my-2'>
          <div className='p-4'>
            <p className=' fw-bold fs-5'>Risorse</p>
            <p className='font-small d-flex align-items-center'><i className="bi bi-eye-fill pe-2"></i> Solo per te</p>
            <Row className='border-bottom border-1 py-2'>
              <Col xs={1}>
              <i className="bi bi-volume-up-fill"></i>
              </Col>
              <Col>
                <p className='fw-bold'>Modalità creazione di contenuti</p>
                <p className='font-small'> 
                  Fatti scoprire, metti in risalto i contenuti sul tuo profilo 
                  e accedi agli strumenti di creazione
                </p>
              </Col>
            </Row>
            <Row className='pt-2'>
              <Col xs={1}>
              <i className="bi bi-people-fill"></i>
              </Col>
              <Col >
                <p className='fw-bold'>La mia rete</p>
                <p className='font-small'>Salva e gestisci i tuoi collegamenti e interessi</p>
              </Col>
              
            </Row>
          </div> 
          <Row className='border-top border-1'>
            <Button variant='' className='fw-bold'>Mostra tutte le risorse</Button>
          </Row>
        </Container>
        {/* Informazioni */}
        <Container className='border-1 border rounded-2 p-4 my-2'>
          <p className=' fw-bold fs-5'>Informazioni</p>

          <p>Descrizione</p>
          <Row className='border-1 border rounded-2 p-2 mt-3'>
            <Col xs={1}>
            <i className="bi bi-gem"></i>
            </Col>
            <Col xs={9}>
              <p className='fw-bold pt-2'>Competenze</p>
              <p className='font-small'>Linguaggi</p>
              
            </Col>
            <Col xs={1} className='py-2'>
              <Button variant='' size='sm' className='rounded-5 fw-bold my-2'><i className="bi bi-arrow-right-short"></i></Button>
            </Col>
          </Row>
        </Container>
        {/* Attività */}
        <Container className='border-1 border rounded-2 pb-1'>
          <div className='p-4'>
            <Row>
              <Col xs={4}>
                <p className='fw-bold fs-5'>Attività</p>
                <p className='font-small text-primary'>follower</p>
              </Col>
              <Col xs={6}>
                <Button variant='' size='sm' className='rounded-5 fw-bold my-2 border-primary border-1 border text-primary'>Crea un post</Button>
              </Col>
              <Col>
                <i className="bi bi-pencil"></i>
              </Col>
            </Row>
              
              <p className='fw-bold'>Non hai ancora pubblicato nulla</p>
              <p className='font-small'>I post che condividi appariranno qui</p>
          </div> 
          <Row className='border-top border-1'>
            <Button variant='' className='fw-bold'>Mostra tutte le analisi</Button>
          </Row>
        </Container>
        {/* Esperienza */}
        <ExperienceComponent />
        {/* Formazione */}
        <Container className='border-1 border rounded-2 pb-1 my-2'>
          <Row>
            <Col xs={9}>
              <p className='fw-bold fs-5'>Formazione</p>
            </Col>
            <Col xs={1}> 
              <Button variant='' size='sm' className='rounded-5 fw-bold '><i className="bi bi-plus-lg"></i></Button>
            </Col>
            <Col xs={1}>
              <Button variant='' size='sm' className='rounded-5 fw-bold'><i className="bi bi-pencil"></i></Button>
            </Col>
          </Row>
        </Container>
        {/* Competenze */}
        <Container className='border-1 border rounded-2 pb-1 my-2'>
          <Row>
            <Col xs={9}>
              <p className='fw-bold fs-5'>Competenze</p>
            </Col>
            <Col xs={1}> 
              <Button variant='' size='sm' className='rounded-5 fw-bold '><i className="bi bi-plus-lg"></i></Button>
            </Col>
            <Col xs={1}>
              <Button variant='' size='sm' className='rounded-5 fw-bold'><i className="bi bi-pencil"></i></Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}
