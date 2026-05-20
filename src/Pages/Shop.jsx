import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollections from '../Component/NEW colllections/NewCollections'
import Newsletter from '../Component/Newsletter/Newsletter'
// import Footer from '../Component/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      {/* <Footer/> */}
    </div>
  )
}

export default Shop
