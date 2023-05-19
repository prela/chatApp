import React from "react";
import { useSelector } from "react-redux";
import Avatar from "react-nice-avatar";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import DarkToggler from "../DarkToggler";

const TopNav = ({ logoutHandler, isDark, toggleDark }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <header className="sticky top-0 w-full flex flex-row items-center h-16 px-6 py-2 z-10 bg-eastern-blue-50 shadow-2xl text-eastern-blue-950 dark:bg-eastern-blue-950 dark:text-eastern-blue-50">
      <img src="/src/assets/chatapp.svg" alt="logo" className="h-full" />
      <h1 className="font-extrabold text-3xl text-center ml-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-eastern-blue-400 to-eastern-blue-700">
          ChatApp
        </span>
      </h1>
      <div className="flex flex-row grow items-center justify-end">
        <div className="flex items-center w-6 me-3">
          <DarkToggler isDark={isDark} toggleDark={toggleDark} />
        </div>
        <div className="flex flex-row items-center hover:bg-eastern-blue-100 dark:hover:bg-eastern-blue-900 rounded p-2">
          <Avatar className="w-6 h-6 me-2" {...user.info.avatar} />
          <span>{user.info.name}</span>
        </div>
        <button
          onClick={logoutHandler}
          className="flex items-center h-10 ml-3 px-2 rounded border text-eastern-blue-700 border-eastern-blue-700 hover:bg-eastern-blue-100 focus:bg-eastern-blue-100 dark:text-eastern-blue-300 dark:border-eastern-blue-300 dark:hover:bg-eastern-blue-900 focus:outline-none dark:focus:bg-eastern-blue-900"
        >
          Logout
          <ArrowRightOnRectangleIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
