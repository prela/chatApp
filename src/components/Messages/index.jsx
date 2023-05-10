import React, { useState } from 'react'
import EachMessage from './EachMessage'

const Messages = ({room}) => {
  const [messages, setMessages] = useState([])

  room.on('message', message => {
    const {data, id, timestamp, clientId, member} = message

    const newMessage = {
      id: id,
      time: timestamp,
      senderId: clientId,
      sender: member.clientData.info.name,
      messageContent: data
    }
    setMessages([...messages, newMessage])
  })

  return (
    <ul>
      {messages.map(message => <EachMessage key={message.id} message={message} />)}
    </ul>
  )
}

export default Messages