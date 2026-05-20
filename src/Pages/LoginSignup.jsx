import React from 'react'
import './CSS/Login.css'
const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
          <div>
            <button>Continue</button>
            <p className='loginsignup-login'>Alreay have an account? <span>Login here</span></p>
            <div className='loginsignup-agree'>
              <input type="checkbox" name="" id="" />
              <p>By continuing, i agree to the term of use & privacy policy.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
