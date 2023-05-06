import React from 'react'

const Messages = ({room}) => {
  room.on('message', message => console.log('Received message:', message));

  return (
    <div>Messages</div>
  )
}

export default Messages