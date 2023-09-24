import React, { useEffect, useState} from 'react'
import Navbar from '../Conmponent/Element/Navbar'
import CardProduct from '../Conmponent/Fragment/CardProduct'
import { addToCart, getProducts } from '../feature/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../Conmponent/Fragment/Cart'

const ProductPage = () => {
  const dispatch = useDispatch()
  const { products, cart } = useSelector(state => state.products);
  const [isOpen, setIsOpen] = useState(false)
  
  
  const addtocart = (product) => {
    dispatch(addToCart(product))
  }
  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className='bg-gray-400'>
      <Navbar
        cartCount={cart}
        cartClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Cart
          product={cart} />
      )}
      <div className="py-[5rem] mx-auto">
          <div className="flex gap-5 justify-center p-6 font-medium text-lg">
          <p>Makan</p>
          <p>|</p>
          <p>Minuman</p>
          <p>|</p>
            <p>Cemilan</p>
        </div>
        <CardProduct
          products={products}
          addtocart={addtocart}
        />
      </div>
    </div>
  )
}

export default ProductPage