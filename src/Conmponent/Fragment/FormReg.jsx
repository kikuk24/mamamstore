import Button from "../Element/Button"
import InputForm from "../Element/Label-Input"

const FormReg = () => {
  const handleReg = (event) => {
    event.preventDefault()
    
  }
  return (
    <form action="" onSubmit={handleReg}>
      <InputForm title="Full Name" placeholder="your full name" type="text" name="fullName"/>
      <InputForm title="Email" placeholder="example@gmail.com" type="email" name="email"/>
      <InputForm title="No Telp" placeholder="089912234" type="number" name="noTelp"/>
      <InputForm title="Password" placeholder="***" type="password"/>
      <InputForm title="Confirm Password" placeholder="***" type="password"/>
      <Button classname="bg-blue-500 hover:bg-blue-900 w-full">Register</Button>
    </form>
  )
}

export default FormReg