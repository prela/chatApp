import React from "react";

const RoomHeader = ({ title }) => {
  return (
    <div className="flex flex-row justify-strech items-center sticky top-16 h-12 w-full shadow-lg backdrop-blur-sm hover:backdrop-blur-lg z-10">
      <h1 className="flex grow h-full justify-center items-center text-xl font-semibold text-eastern-blue-900 dark:text-eastern-blue-100">
        {title}
      </h1>
    </div>
  );
};

export default RoomHeader;
