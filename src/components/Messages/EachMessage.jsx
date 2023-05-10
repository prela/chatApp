import React from 'react'
import { useSelector } from 'react-redux'
import TimePassed from './TimePassed'

const EachMessage = ({message}) => {
  const { user } = useSelector((state) => state.user)

  return (
    <li id={message.id} style={{textAlign: message.senderId === user.chat.id ? 'right' : 'left'}}>
      {message.sender}<br />
      {message.messageContent}<br />
      <TimePassed time={message.time} />
    </li>
  )
}

export default EachMessage