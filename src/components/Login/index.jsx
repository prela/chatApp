import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "/src/redux/user";
import Avatar, { genConfig } from "react-nice-avatar"; // https://nice-avatar.dapi.to/
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid"; // https://heroicons.com/
import DarkToggler from "../DarkToggler";

const Login = ({ isDark, toggleDark }) => {
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
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-eastern-blue-100 text-eastern-blue-950 dark:bg-eastern-blue-950 dark:text-eastern-blue-50">
      <div className="absolute top-0 right-0 p-2">
        <DarkToggler isDark={isDark} toggleDark={toggleDark} />
      </div>
      <div className="flex justify-center">
        <img src="/src/assets/chatapp.svg" alt="logo" className="w-32" />
      </div>
      <h3 className="font-extrabold text-7xl text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-eastern-blue-400 to-eastern-blue-700">
          ChatApp
        </span>
      </h3>
      <form
        onSubmit={userHandler}
        className="flex flex-col rounded p-8 mt-8 bg-eastern-blue-50 dark:bg-eastern-blue-900 shadow-lg shadow-eastern-blue-500/20 dark:shadow-eastern-blue-700/20"
      >
        <div className="relative w-20 mx-auto mb-3">
          <div
            onClick={() => setLocked(!locked)}
            className="absolute p-1 rounded-full -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0 text-eastern-blue-500 hover:bg-eastern-blue-600 hover:text-eastern-blue-50 hover:shadow-lg dark:text-eastern-blue-100 dark:hover:bg-eastern-blue-200 dark:hover:text-eastern-blue-900 cursor-pointer"
            title="Lock selected avatar"
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
          className="flex items-center h-10 px-4 w-64 bg-eastern-blue-100 dark:bg-eastern-blue-700 mt-2 rounded focus:outline-none focus:ring-2 ring-inset ring-eastern-blue-600 dark:ring-eastern-blue-300"
        />
        <button
          type="submit"
          disabled={userInput === ""}
          className="flex items-center justify-center h-10 px-4 w-64 mt-6 rounded font-semibold text-sm text-eastern-blue-50 bg-gradient-to-br from-eastern-blue-400 to-eastern-blue-600 hover:from-eastern-blue-500 hover:to-eastern-blue-700 disabled:from-eastern-blue-100 disabled:to-eastern-blue-300 disabled:text-eastern-blue-700 disabled:cursor-not-allowed
          dark:text-eastern-blue-950 dark:from-eastern-blue-300 dark:to-eastern-blue-500 dark:hover:from-eastern-blue-200 dark:hover:to-eastern-blue-400 dark:disabled:from-eastern-blue-700 dark:disabled:to-eastern-blue-900 dark:disabled:text-eastern-blue-100 transition-all duration-300 ease-in-out hover:shadow-lg shadow-eastern-blue-500/20"
        >
          Start chat
        </button>
      </form>
    </div>
  );
};

export default Login;
