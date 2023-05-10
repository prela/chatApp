import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChat } from '/src/redux/user'
import TopNav from '../TopNav'
import ChatRoom from '../ChatRoom'


const ChatWindow = () => {
  const [drone, setDrone] = useState(null)
  const channel_id = import.meta.env.VITE_DRONE_CHANNEL_ID //Scaledrone channel id from .env file

  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!drone && user.info.name !== '') {
      const sd = new window.Scaledrone(channel_id, {
        data: user
      })
      setDrone(sd)
    }
  }, [user])

  useEffect(() => {
    if (!drone) {
      return
    }
    drone.on('open', (error) => {
      if (error) {
        return console.error(error)
      }
      dispatch(loadChat({id: drone.clientId}))
      console.log('User ' + user.info.name + ' has connected to Scaledrone')
    })

    drone.on('error', (error) => console.error(error))
    drone.on('disconnect', () => {
      console.log('User ' + user.info.name + ' has disconnected, Scaledrone will try to reconnect soon')
    })
    drone.on('reconnect', () => {
      console.log('User ' + user.info.name + ' has been reconnected')
    })
    drone.on('close', () => {
      console.log('User ' + user.info.name + ' has loged out from Scaledrone')
    })
  }, [drone])

  return (
    (!drone) ? (
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