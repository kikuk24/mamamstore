import cake from "../../img/cake.jpg"
import mam from "../../img/mam.jpg"
const Missions = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-5 font-poppins px-12 py-16 w-full">
      <div className="w-full p-3">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Visi Misi</h1>
        <p>Di Mamam Store, misi kami sederhana – menyediakan makanan penutup dan makanan ringan lezat kepada pelanggan kami yang dibuat dengan bahan-bahan terbaik. Kami percaya bahwa setiap orang berhak untuk menikmati makanan manis mereka, dan kami ada di sini untuk mewujudkannya. Kami berkomitmen untuk menyediakan produk berkualitas tinggi dan layanan pelanggan terbaik kepada pelanggan kami, dan kami selalu mencari cara untuk meningkatkannya.</p>
      </div>
      <div className="">
        <img src={mam} alt="" className="w-[400px] my-2" />
        <img src={cake} alt="" className="w-[400px] my-2" />
      </div>
    </div>
  )
}

export default Missions