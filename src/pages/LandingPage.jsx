import React, { useState } from 'react'
import Navbar from '../Conmponent/Element/Navbar'
import Home from '../section/landingPage/Home'
import About from '../section/landingPage/About'
import { useSelector } from 'react-redux'
import Cart from '../Conmponent/Fragment/Cart'

const LandingPage = () => {
  const { products, cart } = useSelector(state => state.products);
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <Navbar
        cartCount={cart}
        cartClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Cart
          product={cart} />
      )}
      <Home />
      <About />
    </div>
  )
}

export default LandingPage