import React, { useEffect, useState } from 'react'

const InfoBar = ({room}) => {
  const [roomJoinLeaveArray, setRoomJoinLeaveArray] = useState([])

  useEffect(() => {
    console.log('useEffect called from InfoBar');
    // room.on('member_join', member => {
    //   setRoomJoinLeaveArray(roomJoinLeaveArray => [...roomJoinLeaveArray, member.clientData.info.name + ' joined the room']);
    // })

    // room.on('member_leave', member => {
    //   setRoomJoinLeaveArray(roomJoinLeaveArray => [...roomJoinLeaveArray, member.clientData.info.name + ' left the room']);
    // })
  }, [room])

  return (
    <div>info bar</div>
    // <div>{roomJoinLeaveArray.map(item => <span key={Math.random()}>{item}</span>)}</div>
  )
}

export default InfoBar