import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className='loaderContainer'>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow" className='loader'/>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow"  className='loader'/>
        <Spinner animation="grow"  className='loader'/>
    </div>
  )
}

export default Loader
