/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from '../assets/React-icon.svg.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const togglenavbar= ()=>{
    setOpenLinks(openLinks)
  }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks? "Open": "close"}>
            <img src={Logo} alt=""/>
            <div className='hiddenLinks'>
            <Link to ='/'>Home</Link>
            <Link to ='/menu'>Projects</Link>
            <Link to ='/about'>About</Link>
            <Link to ='/conatct'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
           <Link to ='/'>Home</Link>
            <Link to ='/weather_app'>WeatherApp</Link>
            <Link to ='/gallery_app'>GalleryApp</Link>
            <Link to ='/QuizApp'>QuizApp</Link>
            <Link to ='/TodoList'>TodoApp</Link>
            <Link to ='/Emoji'>EmojiApp</Link>
            <Link to ='/Covid19'>Covid19</Link>
          <button onClick={togglenavbar}><ReorderIcon /></button>  
        </div>
    </div>
  )
}

export default Navbar