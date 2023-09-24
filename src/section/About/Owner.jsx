import owner from "../../img/owner.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Owner = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="font-poppins flex items-center justify-center flex-col md:flex-row bg-custom py-9 ">
      <div className="" data-aos="zoom-in" data-aos-duration="2000">
        <img src={owner} alt="" className="w-[700px] hover:scale-110 transition-all ease-in-out duration-1000"/>
      </div>
      <div className="md:py-12 md:px-10 px-4 text-center md:text-left">
        <h2 className="text-2xl font-semibold">About Owner</h2>
        <h1 className="py-5 text-xl font-bold">Rahmalika Aumara Zilka</h1>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolor modi doloribus autem architecto commodi, necessitatibus vel. Incidunt eaque quibusdam pariatur, totam voluptatibus, commodi vero quas assumenda quos earum praesentium!</p>
      </div>
      
    </div>
  )
}

export default Owner