import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="/src/assets/chatapp.svg"
        alt="logo"
        className="animate-bounce w-32 mx-auto"
      />
      <p className="text-2xl font-bold text-center mt-5 text-eastern-blue-500">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
