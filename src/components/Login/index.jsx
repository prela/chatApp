import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "/src/redux/user";
import Avatar, { genConfig } from "react-nice-avatar"; // https://nice-avatar.dapi.to/
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid"; // https://heroicons.com/

const Login = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [avatar, setAvatar] = useState({ isGradient: true });
  const [locked, setLocked] = useState(false);

  const changeAvatar = () => {
    if (!locked) {
      const newConfig = genConfig({ isGradient: true });
      setAvatar(newConfig);
    }
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const userHandler = (e) => {
    e.preventDefault();
    dispatch(login({ name: userInput, avatar: avatar }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-200 text-gray-800">
      <div className="flex justify-center">
        <img src="/src/assets/chatapplogo.svg" alt="logo" className="w-32" />
      </div>
      <h3 className="font-extrabold text-7xl text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-500">
          ChatApp
        </span>
      </h3>
      <form
        onSubmit={userHandler}
        className="flex flex-col bg-gray-100 rounded shadow-lg p-8 mt-8"
      >
        <div className="relative w-20 mx-auto mb-3">
          <div
            onClick={() => setLocked(!locked)}
            className="absolute p-1 rounded-full -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0 text-sky-400 hover:bg-sky-400 hover:text-sky-100 hover:shadow-lg cursor-pointer"
          >
            {locked ? (
              <LockClosedIcon className="w-4 h-4" />
            ) : (
              <LockOpenIcon className="w-4 h-4" />
            )}
          </div>
          <div
            onClick={changeAvatar}
            className={locked ? "cursor-not-allowed" : "cursor-pointer"}
          >
            <Avatar className="w-20 h-20" {...avatar} />
          </div>
        </div>
        <label
          htmlFor="userInput"
          className="font-semibold text-xs text-center"
        >
          To continue please provide your name
        </label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={(e) => {
            userInputHandler(e);
            changeAvatar();
          }}
          className="flex items-center h-10 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-10 px-4 w-64 bg-sky-400 mt-6 rounded font-semibold text-sm text-sky-100 hover:bg-sky-500"
        >
          Start chat
        </button>
      </form>
    </div>
  );
};

export default Login;
