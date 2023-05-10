import React from 'react'
import RoomHeader from '../RoomHeader'
import Messages from '../Messages'
import InfoBar from '../InfoBar'
import SendMessages from '../SendMessages'

const ChatRoom = ({drone}) => {
  const room = drone.subscribe('observable-default-room')

  room.on('open', error => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to room');
    }
  });

  const publishMessage = (message) => {
    drone.publish({
      room: 'observable-default-room',
      message: message,
    })
  }

  return (
    <>
      {/* <RoomHeader /> */}
      <Messages room={room} />
      <InfoBar />
      <SendMessages publishMessage={publishMessage} />
    </>
  )
}

export default ChatRoom