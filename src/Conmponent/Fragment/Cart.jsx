import React from 'react'

const Cart = (props) => {
  const { product, increment, decrement, deleteitem } = props
  return (
    <div className='absolute w-[40%] min-h-screen h-fit bg-white top-0 right-0 px-4 py-8 transition-all ease-in-out duration-100 z-10'>
      <h1>Cart</h1>
      {product?.map((val, index) => (
        <div className="flex space-x-4 w-full h-20" key={index}>
          <img src={val?.image} alt="" className="w-14 h-10" />
          <div className="line-clamp-1"> {val?.brand}</div>
          <div className="flex space-x-2">
            <div className="cursor-pointer" onClick={() => decrement(val.id)}>-</div>
            <p className="">{val.qty}</p>
            <div className="cursor-pointer" onClick={() => increment(val.id)}>+</div>
          </div>
          <p className="">Rp.{(val.price).toLocaleString()}</p>
          <p className="">Rp.{(val.price * val.qty).toLocaleString()}</p>
          <div className="" onClick={() => deleteitem(val.id)}>Hapus</div>
          
        </div>))}
      {product.length ? <div className="">Total : Rp.{product.reduce((sum, item) => { return sum + (item.price * item.qty) }, 0).toLocaleString()} </div> : <p className=" ">Product belum ditambahkan</p>}
    </div>
  )
}
    

export default Cart