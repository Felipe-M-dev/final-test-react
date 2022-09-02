import React from 'react'
import Carrousel from '../components/Carrousel'
import '../App.css'

function Home() {
  return (
    <div className='home'>
      <div className='carrousel-home'>
        <h1 className='home-title'>Bienvenido a la Prueba de REACT I</h1>
        <Carrousel />
      </div>
    </div>
  )
}

export default Home