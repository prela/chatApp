import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChat, logout } from "/src/redux/user";
import TopNav from "../TopNav";
import ChatRoom from "../ChatRoom";
import Loader from "../Loader";

const ChatWindow = ({ isDark, toggleDark }) => {
  const [drone, setDrone] = useState(null);
  const channel_id = import.meta.env.VITE_DRONE_CHANNEL_ID; //Scaledrone channel id from .env file

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    drone.close();
    setDrone(null);
    dispatch(logout());
  };

  useEffect(() => {
    const sd = new window.Scaledrone(channel_id, {
      data: user,
    });
    setDrone(sd);
    return () => {
      sd.close();
      setDrone(null);
    };
  }, []);

  useEffect(() => {
    if (drone) {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        if (user.chat.id === null || user.chat.id !== drone.clientId) {
          dispatch(loadChat({ id: drone.clientId }));
        }
        console.log("User " + user.info.name + " has connected to Scaledrone");
        drone.on("error", (error) => console.error(error));
        drone.on("disconnect", () => {
          console.log(
            "User " +
              user.info.name +
              " has disconnected, Scaledrone will try to reconnect soon"
          );
        });
        drone.on("reconnect", () => {
          if (user.chat.id === null || user.chat.id !== drone.clientId) {
            dispatch(loadChat({ id: drone.clientId }));
          }
          console.log("User " + user.info.name + " has been reconnected");
        });
        drone.on("close", () => {
          console.log(
            "User " + user.info.name + " has loged out from Scaledrone"
          );
        });
      });
    }
  }, [drone]);

  return !drone ? (
    <Loader />
  ) : (
    <div className="relative flex grow flex-col items-center justify-center min-h-screen bg-eastern-blue-100 text-eastern-blue-950 dark:bg-eastern-blue-900 dark:text-eastern-blue-50">
      <TopNav logoutHandler={logoutHandler} isDark={isDark} toggleDark={toggleDark} />
      <ChatRoom drone={drone} />
    </div>
  );
};

export default ChatWindow;
