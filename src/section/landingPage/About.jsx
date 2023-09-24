import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Alasan from "../../Conmponent/Fragment/Alasan"
import { alasans } from "../../data/data"

const About = () => {

  useEffect(() => {
        AOS.init();
      }, [])


  return (
    <div className="bg-custom font-poppins">
        <div className="md:flex md:flex-row justify-center md:py-12 md:px-10 items-center font-poppins p-10 flex flex-col" >
      <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="2000">
        <img src="https://10web-site.ai/67/wp-content/uploads/sites/80/2023/08/recycled-shoe-store-home-about-image_A4yQwKCo.webp" alt="" className="md:w-full object-cover md:p-10"/>
      </div>
      <div className="md:ml-10 md:w-1/2 md:p-7 my-8" data-aos="fade-down"data-aos-duration="2000">
        <h1 className="text-2xl">About Us</h1>
        <div className="mt-5 ">
        <h className="text-4xl font-semibold">About Mamam Store</h>
          <p className="my-6 text-xl">Selamat datang di Mamam Store!, Makanan penutup kami dibuat dengan bahan-bahan terbaik, memastikan bahwa setiap gigitan adalah kenikmatan surgawi. Kami berusaha keras untuk menyediakan makanan penutup dan makanan ringan terbaik kepada pelanggan kami yang akan memuaskan hasrat mereka dan membuat mereka menginginkan lebih.</p>
          <Link className="uppercase hover:underline font-bold">Read More..</Link>
      </div>
      </div>
      
      </div>
      <div className="md:py-12 md:px-10 px-4">
        <div className="text-center">
          <h1 className="py-5 text-4xl">Kenapa harus di Mamam Store?</h1>
          <p className="text-xl">menawarkan berbagai macam makanan penutup dan makanan ringan Makanan penutup kami dibuat dengan bahan-bahan berkualitas tinggi dan dijamin akan memuaskan selera manis Anda. Selain itu, camilan kami sempurna untuk saat Anda merasa lapar dan butuh makanan ringan. Berikut adalah beberapa alasan untuk memilih Mamam Store</p>
        </div>
        <div className="md:p-5 md:my-12 w-full flex flex-wrap items-center justify-center gap-6">
          {alasans.map((alasan) => (
            <Alasan key={alasan.id}>
              <Alasan.Nomor nomor={alasan.id} />
              <Alasan.Title title={alasan.title} />
              <Alasan.Isi alasan={alasan.alasan} />
              </Alasan>
              ))}
        </div>
      </div>
    </div>
  )
}

export default About