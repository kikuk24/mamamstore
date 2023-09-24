import { useEffect, useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import { navlinks,sideLeft } from "../../data/data"
import { dropdownLinks } from "../../data/dropdownLinks"
import {FaCartArrowDown, FaUser} from "react-icons/fa"
const Navbar = (props) => {
  const {cartCount, cartClick} = props
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [dropdown, setDropdown] = useState(false)
  const handleLogin = () => {
    window.location.href = '/login'
  }
  useEffect(() => {
    setUser(localStorage.getItem('token'))
  },[])
  // useEffect(() => {
  //   dispatch(getMe())
  // }, [dispatch])
  // const logout = () => {
  //   dispatch(Logout())
  //   dispatch(reset())
  //   navigate('/')
  // }

  return (
    <div className="shadow-md w-full fixed top-0 left-0 text-custom-text font-poppins z-10">
      <div className="md:flex items-center justify-between bg-custom py-4 md:px-10 px-7">
        {sideLeft.map((link) => (
          <div key={link.id} className="ml-8 font-bold text-2xl cursor-pointer flex items-center">
          {link.title}
        </div>
        ))}
        <div className="absolute left-5 top-5 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-6 h-6"/> : <Bars3Icon className="w-6 h-6"/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 md:ml-0 absolute md:static bg-custom md:z-auto z-[-1] left-0 w-2/3 md:h-auto h-screen  md:w-auto transition-all duration-500 md:pl-0 pl-9 ease-in ${open ? 'left-0' : 'left-[-490px]' }`}>
        {navlinks.map((link) => (
          <li key={link.id} className=" text-lg md:my-0 my-7">
            <a href={link.path} className="hover:text-white duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2">{link.name}</a>
          </li>
        ))}
        </ul>
        <div className="md:static absolute right-7 top-3 md:ml-4">
          {user ? (
            <div className="flex items-center">
              <div className="flex items-center md:mr-5 justify-center">
                <button className="text-black" onClick={() => setDropdown(!dropdown)}>Saya</button>
                {dropdown && (
                  <div className={`${dropdown ? 'block' : 'hidden'}  absolute top-12 right-5 w-44 bg-white rounded-lg  shadow  py-2  mt-2  border  border-custom text divide-y divide-slate-700 text-custom-text  z-10  `}>
                    <div className="px-4 py-3 text-sm">
                      <div className="">Saya</div>
                      <div class="font-medium truncate">Saya</div>
                    </div>
                    <ul className="py-2 text-sm">
                      {dropdownLinks.map((link) => (
                        <li key={link.id}>
                          <a href={link.path} className="block px-4 py-2 hover:bg-gray-100">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="py-2">
                      <button className="block px-4 py-2 hover:bg-gray-100" onClick={logout}>Sign Out</button>
                      </div>
                  </div>
                )}
              </div>
              <div className="md:mr-5 m-0 md:mt-0">
                <img src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-8 h-8 rounded-full" />
              </div>
            
            </div>
          ) : (
              <div className="flex gap-7">
                <FaCartArrowDown className="w-8 h-8 mt-2 md:w-9 cursor-pointer" onClick={() => {cartClick()}} />
                {cartCount.length > 0 && <span className="absolute w-5 h-5 bg-custom-text text-white rounded-full flex items-center justify-center text-xs md:right-[100px] right-12">{cartCount.length}</span>}
                <FaUser className="w-8 h-8 mt-2 md:w-10 cursor-pointer" onClick={handleLogin} />
              </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar