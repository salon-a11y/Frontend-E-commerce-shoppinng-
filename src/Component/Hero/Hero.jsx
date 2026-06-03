import React, { useState } from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from'../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import NewCollections from '../NEW colllections/NewCollections'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
 const navigate = useNavigate();

  function latestbtnhandler(){
     navigate('/new-collection')
  }
  return (
    <div className='hero'>
      <div className="hero-left">
  <h2>NEW ARRIVALS ONLY</h2>
  <div>
    <div className="hand-hand-icon">
      <p>new</p>
      <img src={hand_icon} alt="" />
    </div>
    <p>collections</p>
    <p>for Everyone</p>
  </div>
  <div className="hero-latest-btn">
    <button onClick={latestbtnhandler} className="hero-latest-btn2">Latest Collection <img src={arrow_icon} alt="" /></button>
  
  </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
