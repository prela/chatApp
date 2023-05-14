import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import TimePassed from "../TimePassed";

const Messages = ({ messages }) => {
  const scrollRef = useRef(null);
  const { user } = useSelector((state) => state.user);

  const messagesList = messages.map((message, i, a) => {
    const prevMessage = a[i - 1];
    const nextMessage = a[i + 1];

    return (
      <div
        key={message.id}
        className={
          "flex flex-col w-5/6 " +
          (message.isAuthor ? "self-end text-end" : "self-start")
        }
      >
        {prevMessage && prevMessage.senderId === message.senderId ? null : (
          <h4 className="text-xl font-semibold mb-2">{message.sender}</h4>
        )}
        <div
          className={
            "px-3 border " +
            (message.isAuthor
              ? " bg-sky-100 border-sky-200 "
              : " bg-gray-200 border-gray-300 ") +
            (!prevMessage
              ? " pt-1 rounded-t-lg border-b-0 "
              : prevMessage && prevMessage.senderId !== message.senderId
              ? " pt-1 rounded-t-lg border-b-0 "
              : prevMessage &&
                prevMessage.senderId === message.senderId &&
                prevMessage.time - message.time > 60 * 1
              ? " pt-1 rounded-t-lg border-b-0 "
              : " border-t-0 border-b-0 ") +
            (!nextMessage
              ? " shadow-lg pb-1 rounded-b-lg border-t-0 "
              : (nextMessage && nextMessage.senderId !== message.senderId) ||
                (nextMessage && nextMessage.time - message.time > 60 * 1)
              ? " shadow-lg pb-1 rounded-b-lg border-t-0 "
              : "")
          }
        >
          {message.messageContent}
        </div>
        {!nextMessage ? (
          <TimePassed time={message.time} />
        ) : (nextMessage && nextMessage.senderId !== message.senderId) ||
          (nextMessage && nextMessage.time - message.time > 60 * 1) ? (
          <TimePassed time={message.time} />
        ) : null}
      </div>
    );
  });

  useLayoutEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col flex-grow w-full px-8 my-20 overflow-auto"
    >
      {messagesList}
    </div>
  );
};

export default Messages;
