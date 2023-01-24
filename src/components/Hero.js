import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.pdf'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Hero() {
  return (
    <div className='ctn-hero'>
        <div className='ctn-title'>
            <img src={logo} alt='logo'/>
            <h3>LA PREFERIDA</h3>
            <p><FmdGoodIcon sx={{color:'red'}}/>Navarro</p>
            <div className='ctn-links'>
                <button className='btn'>
                    <RestaurantIcon/>
                    <a href={menu} catalogo={' '}>Menu</a>
                </button>
                <button className='btn'>
                    <InstagramIcon/>    
                    <a href='https://www.instagram.com/preferida.la/'>Instagram</a>
                </button>
                <button className='btn'>
                    <FacebookIcon/> 
                    <a href='https://www.facebook.com/profile.php?id=100063723622977'>Facebook</a>
                </button>
                <button className='btn'>
                    <WhatsAppIcon/>
                    <a href='https://wa.me/c/5492227511940'>Whatsapp</a>
                </button>
            </div>
        </div>
    </div>
  )
}
