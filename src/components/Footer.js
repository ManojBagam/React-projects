/* eslint-disable no-unused-vars */
import React from 'react'
import { Instagram,Twitter, Facebook,LinkedIn} from '@mui/icons-material'
import '../styles/Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
       <div className='socialmedia'>
       <a href = "https://www.instagram.com/" target='_blank' rel='noreferrer'><Instagram/></a>
       <a href = "https://www.facebook.com/" target='_blank' rel='noreferrer'><Facebook/></a>
       <a href = "https://www.twitter.com/" target='_blank' rel='noreferrer'><Twitter /></a>
       <a href = "https://www.linkedin.com/" target='_blank' rel='noreferrer'><LinkedIn /></a>
        <p>&copy; 2022 All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer