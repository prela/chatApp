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
    <div className="sticky bottom-0 w-full flex flex-row items-center h-16 px-6 py-2 shadow-2xl bg-gray-200">
      <form onSubmit={sendMessagesHandler} className="flex flex-row items-center w-full">
        <input
          type="text"
          id="messageInput"
          value={messageInput}
          onChange={messageInputHandler}
          placeholder="Enter your message"
          autoFocus={true}
          className="flex grow items-center h-12 rounded-l px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 ring-inset"
        />
        <button type="submit" className="flex items-center justify-center h-12 px-3 bg-sky-400 rounded-r font-semibold text-lg uppercase text-sky-100 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 ring-inset"><PaperAirplaneIcon className="w-6 h-6" /></button>
      </form>
    </div>
  );
};

export default SendMessages;
