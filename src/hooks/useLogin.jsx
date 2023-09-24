import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.services";

export const useLogin = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser(getUsername(token))
    } else {
      window.location.href = '/login'
    }
  }, []);
  return user
}