import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '/src/redux/user'

const TopNav = ({drone, setDrone}) => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    drone.close()
    setDrone(null)
    dispatch(logout())
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src="/src/assets/chatapplogo.svg" alt="logo" height="48" />
          <span>ChatApp</span>
        </div>
        <div className="profile">
          <span>{userInfo.name}</span>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </header>
    </>
  )
}

export default TopNav