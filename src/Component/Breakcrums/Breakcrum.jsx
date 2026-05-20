import React from 'react'
import './Breakcrums.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breakcrum = (props) => {
    const {product} = props;
  return (
    <div className='breakcrum'>
        HOME <img src={arrow_icon} alt="" />Shop <img src={arrow_icon} alt="" />{product.category}
        <img src={arrow_icon} alt="" /> {product.name}

      
    </div>
  )
}

export default Breakcrum
