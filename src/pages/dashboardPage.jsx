import React, { useEffect } from 'react'
import SideBar from '../Conmponent/Element/dashboard/SideBar'
import DashboardView from '../Conmponent/Element/dashboard/DashboardView'
import DashboardMain from '../Conmponent/Element/dashboard/DasboardMain'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../feature/authSlice'

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth)
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  
  useEffect(() => {
    if (isError) {
      navigate('/login')
    }
  }, [isError, navigate]);

  return (
    <div className='flex font-poppins'>
      <div className="basis-[14%] h-[100vh] ">
        <SideBar/>
      </div>
      <div className="basis-[86%]">
        <DashboardView />
        <DashboardMain />
      </div>
    </div>
  )
}

export default DashboardPage