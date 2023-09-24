import { useSelector } from "react-redux"

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <div>
      <div className="">Hello World</div>
    </div>
  )
}

export default ProfilePage