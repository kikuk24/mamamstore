
const Alasan = (props) => {
  return (
    <div className="py-5 px-6 my-6 flex flex-col  w-[500px]  bg-custom-text text-white rounded-md  h-[400px] md:text-lg" data-aos="fade-right" data-aos-duration="1000">{props.children}</div>
  )
}
const Nomor = (props) => {
  return (
    <div className="py-4 md:text-2xl">
      <h1 className='font-bold'>{props.nomor}</h1>
    </div>
  )
}
const Title = (props) => {
  return (
    <div className="font-bold py-3 text-3xl">
      <h1>{props.title}</h1>
    </div>
  )
}
const Isi = (props) => {
  return (
    <div className="py-2">
      <h1>{props.alasan}</h1>
    </div>
  )
}



Alasan.Title = Title
Alasan.Nomor = Nomor
Alasan.Isi = Isi
export default Alasan