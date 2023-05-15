import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../redux/user";
import RoomHeader from "../RoomHeader";
import Messages from "../Messages";
// import InfoBar from "../InfoBar";
import SendMessages from "../SendMessages";

const ChatRoom = ({ drone }) => {
  const roomTitle = "Default Room";
  const roomName = "observable-default-room";
  const room = drone.subscribe(roomName);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const messages = user.chat.messages

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

  room.on("message", (message) => {
    const { data, id, timestamp, clientId, member } = message;

    const newMessage = {
      id: id,
      room: roomName,
      time: timestamp,
      senderId: clientId,
      sender: member.clientData.info.name,
      avatar: member.clientData.info.avatar,
      messageContent: data,
      isAuthor: clientId === user.chat.id,
    };
    dispatch(setMessages(newMessage));
  });

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
