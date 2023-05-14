import React from "react";
import { useSelector } from "react-redux";

const TopNav = ({ logoutHandler }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/src/assets/chatapplogo.svg" alt="logo" height="48" />
          <span>ChatApp</span>
        </div>
        <div className="profile">
          <span>{user.info.name}</span>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </header>
    </>
  );
};

export default TopNav;
