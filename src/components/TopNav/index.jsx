import React from "react";
import { useSelector } from "react-redux";

const TopNav = ({ logoutHandler }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <header className="sticky top-0 w-full flex flex-row items-center h-16 px-6 py-2 bg-white shadow-2xl text-gray-900">
      <img src="/src/assets/chatapplogo.svg" alt="logo" className="h-full" />
      <h1 className="font-extrabold text-3xl text-center ml-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-500">
          ChatApp
        </span>
      </h1>
      <div className="flex flex-row grow items-center justify-end">
        <span>{user.info.name}</span>
        <button onClick={logoutHandler} className="flex items-center h-10 ml-3 pl-2 pr-2 sm:pr-4 rounded bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Logout</button>
      </div>
    </header>
  );
};

export default TopNav;
