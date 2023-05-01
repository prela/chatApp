import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChat } from 'src/redux/user'

const ChatWindow = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const drone = new window.Scaledrone('1PSUtcvA6NbZ0T8Q', {
      data: userInfo.name
    })
    drone.on("open", (error) => {
      if (error) {
        return console.error(error)
      }
      console.log('User joined')
      dispatch(loadChat({id: drone.clientId}))
    })

    drone.on("error", (error) => console.error(error))
    drone.on("disconnect", () => {
      console.log("User has disconnected, Scaledrone will try to reconnect soon")
    })
    drone.on("reconnect", () => {
      console.log("User has been reconnected")
    })
  }, [])

  return (
    <>
      <div>ChatWindow</div>
      <div>{userInfo.name}</div>
    </>
  )
}

export default ChatWindow