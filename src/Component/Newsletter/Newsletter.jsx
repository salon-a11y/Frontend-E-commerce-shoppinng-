import React from 'react'
import './Newletter.css'
const Newsletter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive offers on Your Email</h1>
      <p>Subscribe to our Newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Enter Your Email id ' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
