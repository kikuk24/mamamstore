import React, { useEffect, useRef, useState } from 'react'
import Button from '../Element/Button';
import InputForm from '../Element/Label-Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUSer, reset } from '../../feature/authSlice';
const FormLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)
  
  useEffect(() => {
    if (user || isSuccess) {
      navigate('/')
    }
    dispatch(reset())
  },[user,isSuccess,dispatch,navigate])

  const hadleLogin = (event) => {
    event.preventDefault()
    dispatch(LoginUSer({ email, password }))
    
    
  }
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus();
  }, [])
  
  return (
    <div>
      <form onSubmit={hadleLogin}>
      <InputForm title="Email" type="text" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={usernameRef} />
      <InputForm title="Password" type="password" placeholder='Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" classname="bg-[#FFD83B] text-[#FB4D32] font-semibold mt-4 w-full">{isLoading ? "Loading..." : "Login"}</Button>
        {isError && <p className='text-red-500 font-semibold text-center mt-5'>{message}</p>}
      </form>
    </div>
  )
}

export default FormLogin