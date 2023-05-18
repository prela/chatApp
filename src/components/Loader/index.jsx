import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-eastern-blue-100 text-eastern-blue-950 dark:bg-eastern-blue-950 dark:text-eastern-blue-50">
      <img
        src="/src/assets/chatapp.svg"
        alt="logo"
        className="animate-bounce w-32 mx-auto"
      />
      <p className="text-2xl font-bold text-center mt-5 text-eastern-blue-950 dark:text-eastern-blue-50">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
