import { useSelector } from "react-redux"
import Footer from "../Conmponent/Element/Footer"
import Navbar from "../Conmponent/Element/Navbar"
import AboutS from "../section/About/AboutS"
import Missions from "../section/About/Missions"
import Owner from '../section/About/Owner'
import { useState } from "react"
import Cart from "../Conmponent/Fragment/Cart"

const AboutPages = () => {
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
      <AboutS />
      <Missions />
      <Owner />
      <Footer/>
    </div>
  )
}

export default AboutPages