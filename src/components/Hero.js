import React from 'react'
import logo from '../assets/logo.jpg'
import catalogo from '../assets/catalogo.pdf'

export default function Hero() {
  return (
    <div className='ctn-hero'>
        <div className='ctn-title'>
            <img src={logo} alt='logo'/>
            <h1>LA PREFERIDA</h1>
            <p>Navarro, Bs As</p>
            <button className='btn'>
                <a href={catalogo} Catalogo={' '}>Descargar Catalogo</a>
            </button>
            <div className='ctn-social'>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Instagram</a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Facebook</a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Whatsapwp</a>
                </button>
            </div>
        </div>
    </div>
  )
}
