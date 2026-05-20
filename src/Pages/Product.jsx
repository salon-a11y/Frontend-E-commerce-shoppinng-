import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breakcrum from '../Component/Breakcrums/Breakcrum'
import ProductDisplay from '../Component/Productdisplay/ProductDisplay'
import Description from '../Component/description/Description'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  console.log(product);
  console.log(productId);
  
  
  return (

    <div>
      <Breakcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
    </div>
  )
}

export default Product
