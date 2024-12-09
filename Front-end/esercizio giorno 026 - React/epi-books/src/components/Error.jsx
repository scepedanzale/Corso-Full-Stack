import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Error() {
  return (
    <Alert variant='danger mt-2'>
          Qualcosa è andato storto nel caricamento dei dati...
    </Alert>
  )
}
