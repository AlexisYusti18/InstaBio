import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.pdf'

export default function Hero() {
  return (
    <div className='ctn-hero'>
        <div className='ctn-title'>
            <img src={logo} alt='logo'/>
            <h3>LA PREFERIDA</h3>
            <p>📍Ubicados en Navarro</p>
            <div className='ctn-links'>
                <button className='btn'>
                    <a href={menu} catalogo={' '}>Menu</a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Instagram</a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Facebook</a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/preferida.la/'>Whatsapp</a>
                </button>
            </div>
        </div>
    </div>
  )
}
