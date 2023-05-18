import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const DarkToggler = ({ isDark, toggleDark }) => {
  return (
    <div className="w-6 h-6 cursor-pointer">
      {isDark ? (
        <SunIcon onClick={toggleDark} />
      ) : (
        <MoonIcon onClick={toggleDark} />
      )}
    </div>
  );
};

export default DarkToggler;
