import React from "react";
import { useSelector } from "react-redux";
import Avatar from "react-nice-avatar";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const TopNav = ({ logoutHandler }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <header className="sticky top-0 w-full flex flex-row items-center h-16 px-6 py-2 bg-white shadow-2xl text-gray-900">
      <img src="/src/assets/chatapp.svg" alt="logo" className="h-full" />
      <h1 className="font-extrabold text-3xl text-center ml-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-500">
          ChatApp
        </span>
      </h1>
      <div className="flex flex-row grow items-center justify-end">
        <div className="flex flex-row items-center hover:bg-gray-100 rounded p-2">
          <Avatar className="w-6 h-6 me-2" {...user.info.avatar} />
          <span>{user.info.name}</span>
        </div>
        <button
          onClick={logoutHandler}
          className="flex items-center h-10 ml-3 pl-2 pr-2 rounded border-2 group bg-gray-100 hover:bg-gray-200 hover:border-sky-400 focus:outline-none focus:bg-gray-200"
        >
          Logout
          <ArrowRightOnRectangleIcon className="h-5 w-5 ml-2 group-hover:fill-sky-400" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
