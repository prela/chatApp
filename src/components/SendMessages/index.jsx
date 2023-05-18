import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

const SendMessages = ({ publishMessage }) => {
  const [messageInput, setMessageInput] = useState("");

  const messageInputHandler = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessagesHandler = (e) => {
    e.preventDefault();
    publishMessage(messageInput);
    setMessageInput("");
  };

  return (
    <div className="sticky bottom-0 w-full flex flex-row items-center h-16 px-6 py-2 shadow-2xl bg-eastern-blue-50 dark:bg-eastern-blue-950">
      <form
        onSubmit={sendMessagesHandler}
        className="flex flex-row items-center w-full"
      >
        <input
          type="text"
          id="messageInput"
          value={messageInput}
          onChange={messageInputHandler}
          placeholder="Enter your message"
          autoFocus={true}
          className="flex grow items-center h-12 rounded-l px-3 text-sm focus:outline-none focus:ring-2 ring-inset ring-eastern-blue-600 dark:ring-eastern-blue-300"
        />
        <button
          type="submit"
          disabled={messageInput === ""}
          className="flex items-center justify-center h-12 px-3 rounded-r font-semibold text-lg focus:outline-none focus:ring-2 ring-inset text-eastern-blue-50 bg-gradient-to-br from-eastern-blue-400 to-eastern-blue-600 hover:from-eastern-blue-500 hover:to-eastern-blue-700 disabled:from-eastern-blue-100 disabled:to-eastern-blue-300 disabled:text-eastern-blue-700 disabled:cursor-not-allowed
          dark:text-eastern-blue-950 dark:from-eastern-blue-300 dark:to-eastern-blue-500 dark:hover:from-eastern-blue-200 dark:hover:to-eastern-blue-400 dark:disabled:from-eastern-blue-700 dark:disabled:to-eastern-blue-900 dark:disabled:text-eastern-blue-100 transition-all duration-300 ease-in-out hover:shadow-lg shadow-eastern-blue-500/20"
        >
          <PaperAirplaneIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default SendMessages;
