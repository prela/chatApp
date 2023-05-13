import React, { useEffect, useState } from "react";
import RoomHeader from "../RoomHeader";
import Messages from "../Messages";
import InfoBar from "../InfoBar";
import SendMessages from "../SendMessages";

const ChatRoom = ({ drone }) => {
  const roomTitle = "Default Room";
  const roomName = "observable-default-room";
  const room = drone.subscribe(roomName);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    room.on("open", (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Connected to room", room.name);
      }
    });
    return () => {
      room.unsubscribe();
      console.log("Disconnected from room", room.name);
    };
  }, [drone]);

  // useEffect(() => {
  room.on("message", (message) => {
    console.log("Mounted room.on message", room.name);
    const { data, id, timestamp, clientId, member } = message;
    console.log(message);

    const newMessage = {
      id: id,
      room: roomName,
      time: timestamp,
      senderId: clientId,
      sender: member.clientData.info.name,
      messageContent: data,
    };
    setMessages((messages) => [...messages, newMessage]);
  });
  // return () => {
  //   console.log('Unmounted from room.on message', room.name);
  // }
  // }, [room])

  const publishMessage = (message) => {
    drone.publish({
      room: roomName,
      message: message,
    });
  };

  const thisRoomMessages = messages.filter(
    (message) => message.room === roomName
  );

  return (
    <>
      <RoomHeader title={roomTitle} />
      <Messages messages={thisRoomMessages} roomName={roomName} />
      {/* <InfoBar room={room} /> */}
      <SendMessages publishMessage={publishMessage} />
    </>
  );
};

export default ChatRoom;
