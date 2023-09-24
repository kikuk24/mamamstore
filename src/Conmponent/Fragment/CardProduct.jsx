import Button from "../Element/Button"

const CardProduct = (props) => {
  const { products, addtocart } = props

  return (
    <div className="flex flex-wrap items-center gap-5 justify-center mx-2 my-12  p-5">
      {products?.map((product) => (
        <div className=" bg-white p-9 rounded-sm" key={product.id}>
        <img src={product.image} alt="" className="rounded-t-sm object-cover  hover:scale-100 transition-all duration-500 ease-in-out hover:5 mx-auto " />
        <h2 className="font-medium">{product.brand}</h2>
          <h2 className="font-medium">Rp{product.price.toLocaleString()}</h2>
          <div className="flex gap-2">
            <Button classname="bg-custom text-custom-text w-full mx-auto mt-3" on onClick={() => {addtocart(product)}}>Add to Cart</Button>
      </div>
    </div> 
      ))}
    </div>
  )
}
export default CardProduct