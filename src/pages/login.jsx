import React from 'react'
import FormLogin from '../Conmponent/Fragment/FormLogin'
import AuthLayout from '../Conmponent/Layout/AuthLayout'



const LoginPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <AuthLayout type="login" title="Login" desc="Hai, Selamat datang dan selamat bergabung">
        <FormLogin></FormLogin>
      </AuthLayout>
    </div>
  )
}

export default LoginPage