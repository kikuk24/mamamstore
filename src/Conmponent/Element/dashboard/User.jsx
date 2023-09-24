import DashboardView from "./DashboardView"
import UserList from "./Element/UserList"
import SideBar from "./SideBar"

const User = () => {
  return (
    <div className="flex font-poppins">
      <div className="basis-[12%] h-[100vh]">
      <SideBar></SideBar>
      </div>
      <div className="basis-[88%]">
        <DashboardView></DashboardView>
        <UserList></UserList>
      </div>
    </div>
  )
}

export default User