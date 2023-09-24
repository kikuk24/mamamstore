import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa"
import img from"../../../img/user-default-profile.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardView = () => {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <div className="shadow-lg px-[25px] justify-between h-[70px] items-center flex">
      <div className="flex items-center rounded-[5px] ">
        <input type="text" className="bg-gray-100 pl-[13px] rounded-[5px] w-[350px] placeholder:text-[14px] leading-[20px] font-normal h-[40px] outline-none" placeholder="Search.." />
        <div className="bg-custom h-[40px] flex items-center justify-center px-[14px] cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
          {/* <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
            <FaRegBell />
          <FaEnvelope/>
          </div> */}
        <div className="flex items-center gap-[15px] relative">
          <p>{user && user.name}</p>
          <div className="h-[40px] w-[40px] rounded-full justify-center items-center flex">
            <img src={user && user.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardView