/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from '../assets/react.webp'
import '../styles/Home.css'


const Home = () => {
  return (
    <div className='home'  style={{ backgroundImage: `url(${BannerImage})`}}> 
       <div className='headerContainer'>
        <h1>MY REACT PROJECTS</h1>
        <Link to='weather_app'><br/><br/><br/><br/>
        <button> LET's GO </button>
          </Link>
       </div>
    </div>
  )
}

export default Home