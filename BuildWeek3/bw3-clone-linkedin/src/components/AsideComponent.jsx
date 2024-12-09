import React from 'react'
import { Container } from 'react-bootstrap'
import '../AsideComponent.css'

export default function AsideComponent() {
  return (
    <>
    <div>
       {/* Lingua profilo + Public profile & URL */}
        <Container className='border rounded p-3'>
          <div className='d-flex justify-content-between'>
            <div>
              <p className='mb-1 fw-bold'>Lingua del profilo</p>
              <p className='mb-1 text-muted'>Italiano</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
            </div>
            </div>
            <hr />
          <div className='d-flex justify-content-between'>
            <div>
              <p className='mb-1 fw-bold'>Public profile & <span className='text-uppercase'>url</span></p>
              <p className='mb-1 text-muted'>https://striveschool-api.herokuapp.com/api/profile/me</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
            </div>
          </div>
        </Container>


        {/* altri profili */}
        <Container className='profiliConsultati border rounded p-4 mt-3'>
          <div>
            <p className='fw-semibold'>Altri profili consultati</p>
          </div>
          <div className='profilo1'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>
          
          <hr />

          <div className='profilo2'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>  

          <hr />

          <div className='profilo3'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='profilo4'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='profilo5'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='text-center text-muted fw-semibold'>
            <p className='mb-0'>Mostra tutto</p>
          </div>
        </Container>


        {/* persone a cazzum */}
        <Container className='profiliConsultati border rounded p-4 mt-3'>
        <div>
            <p className='fw-semibold mb-0'>Persone che potresti conoscere</p>
            <p className='text-muted'>Dalla tua azienda</p>
          </div>
          <div className='profilo1'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>
          
          <hr />

          <div className='profilo2'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>  

          <hr />

          <div className='profilo3'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='profilo4'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='profilo5'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Andrea Bardi</p>
                <p  className='mb-2'>Hi, I'm a Junior Full Stack Developer & Graphic Designer</p>
                <button className='px-2 d-flex align-items-center text-secondary'> <i class="bi bi-person-fill-add me-1"></i> Collegati </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='text-center text-muted fw-semibold'>
            <p className='mb-0'>Mostra tutto</p>
          </div>
        </Container>


        {/* che minchia ti interessa */}
        <Container className='sezioneInteressi border rounded p-4 mt-3'>
        <div>
            <p className='fw-semibold mb-0'>Potrebbe interessarti</p>
            <p className='text-muted'>Pagine per te</p>
          </div>

          <div className='interesse1'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Datapizza</p>
                <p className='mb-0'>Servizi IT e consulenza IT</p>
                <p  className='mb-2 text-muted'>72.632 follower</p>
                <div className='d-flex align-items-center justify-content-center mb-2'>
                  <div>
                    <img 
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                  alt="" 
                  width={'20x'}
                  style={{ borderRadius: "25px" }} 
                  />
                  </div>
                  <div>
                    <p className='ms-2 mb-0'>2 collegamenti seguono questa pagina</p>
                  </div>
                  
                </div>
                <button className='px-2 d-flex align-items-center text-secondary fw-semibold'> <i class="bi bi-plus"></i> Segui </button>
              </div>
            </div>
          </div>
          
          <hr />

          <div className='interesse2'>
            <div className='d-flex '>
              <div>
                <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                alt="" 
                width={'40x'}
                style={{ borderRadius: "25px" }} 
                />
              </div>
              <div className="ms-2">
                <p className='fw-semibold mb-0'>Datapizza</p>
                <p className='mb-0'>Servizi IT e consulenza IT</p>
                <p  className='mb-2 text-muted'>72.632 follower</p>
                <div className='d-flex align-items-center justify-content-center mb-2'>
                  <div>
                    <img 
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                  alt="" 
                  width={'20x'}
                  style={{ borderRadius: "25px" }} 
                  />
                  </div>
                  <div>
                    <p className='ms-2 mb-0'>2 collegamenti seguono questa pagina</p>
                  </div>
                  
                </div>
                <button className='px-2 d-flex align-items-center text-secondary fw-semibold'> <i class="bi bi-plus"></i> Segui </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='text-center text-muted fw-semibold'>
            <p className='mb-0'>Mostra tutto</p>
          </div>
        </Container>
    </div>
       
    </>
  )
}
