import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'
import { useNavigate } from 'react-router-dom'
const Offers = () => {
  const navigate = useNavigate()
  function offerhandler(){
    navigate('/news-letter')
  }
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button onClick={offerhandler}>Check Now</button>
        </div>
        <div className="offers-rigth">
            <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
