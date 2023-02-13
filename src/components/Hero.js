import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.pdf'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function Hero() {
  return (
    <div className='ctn-hero'>
        <div className='ctn-title'>
            <img src={logo} alt='logo'/>
            <h3>LA PREFERIDA</h3>
            <p><FmdGoodIcon sx={{color:'white'}}/>Navarro</p>
            <div className='ctn-links'>
                <button className='btn'>
                    <a href={menu} catalogo={' '}>Menu</a>
                </button>
                <button className='btn-instagram'>
                    <a href='https://www.instagram.com/preferida.la/'>Instagram</a>
                </button>
                <button className='btn-facebook'>
                    <a href='https://www.facebook.com/profile.php?id=100063723622977'>Facebook</a>
                </button>
                <button className='btn-whatsapp'>
                    <a href='https://wa.me/c/5492227511940'>Whatsapp</a>
                </button>
            </div>
        </div>
    </div>
  )
}
