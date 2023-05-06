import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChat } from '/src/redux/user'
import TopNav from '../TopNav'
import ChatRoom from '../ChatRoom'


const ChatWindow = () => {
  const [drone, setDrone] = useState(null)
  const channel_id = import.meta.env.VITE_DRONE_CHANNEL_ID //Scaledrone channel id from .env file

  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!drone && userInfo.name !== '') {
      const sd = new window.Scaledrone(channel_id, {
        data: userInfo
      })
      setDrone(sd)
    }
  }, [userInfo])

  useEffect(() => {
    if (!drone) {
      return
    }
    drone.on('open', (error) => {
      if (error) {
        return console.error(error)
      }
      dispatch(loadChat({id: drone.clientId}))
      console.log('User ' + userInfo.name + ' has connected to Scaledrone')
    })

    drone.on('error', (error) => console.error(error))
    drone.on('disconnect', () => {
      console.log('User ' + userInfo.name + ' has disconnected, Scaledrone will try to reconnect soon')
    })
    drone.on('reconnect', () => {
      console.log('User ' + userInfo.name + ' has been reconnected')
    })
    drone.on('close', () => {
      console.log('User ' + userInfo.name + ' has loged out from Scaledrone')
    })
  }, [drone])

  // return (
  //   <>
  //     <div>ChatWindow</div>
  //   </>
  // )

  // return drone === null ? (
  //   <span>Loading...</span>
  //   ) : (

  return (
    (drone === null || drone === undefined) ? (
      <span>Loading...</span>
    ) : (
      <>
        <TopNav drone={drone} setDrone={setDrone} />
        <ChatRoom drone={drone} />
      </>
    )
  )
}

export default ChatWindow