import { FaShoppingBag, FaTachometerAlt, FaUser, FaWrench, } from "react-icons/fa"
import Link from "./Element/Link"
import { useNavigate } from "react-router-dom"
const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-custom h-screen font-poppins px-[25px]">
      <div className="flex items-center justify-center px[15px] py-6 border-b-[1px] border-custom-text">
        <h1 className="text-[20px] text-custom-text font-bold leading-[24px] cursor-pointer ">Admin Panel</h1>
      </div>
      <div className="flex items-center gap-[15px] py[20px] border-b-[1px] border-custom-text">
          <FaTachometerAlt className="text-custom-text"/>
          <p className="text-[15px] leading-[20px] font-bold text-custom-text">Dashboard</p>
      </div>
      <Link>
        <Link.Title title="interface" />
        <Link.Menu icon={<FaShoppingBag className="text-custom-text" />} text="Product" />
        <Link.Menu icon={<FaWrench className="text-custom-text" />} text="Utility" />
        <Link.Menu icon={<FaUser className="text-custom-text" />} text="User" onClick={() => {navigate('/dashboard/user')}} />
      </Link>
      <a href="/" className="mt-5">Back to Home</a>
      <button className="bg-custom-text text-white py-2 px-5 mt-5 hover:bg-gray-800 transition-all ease-in-out duration-75">Logout</button>
    </div>
  )
}

export default SideBar