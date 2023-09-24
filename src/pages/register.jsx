import FormReg from "../Conmponent/Fragment/FormReg"
import AuthLayout from "../Conmponent/Layout/AuthLayout"

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthLayout type="register" title="Register" desc="Untuk Melanjutkan silahkan Register terlebih dahulu ya.">
        <FormReg></FormReg>
      </AuthLayout>
    </div>
  )
}

export default RegisterPage