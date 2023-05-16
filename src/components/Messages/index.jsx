import React, { useLayoutEffect, useRef } from "react";
import Avatar from "react-nice-avatar";
import TimePassed from "../TimePassed";

const Messages = ({ messages }) => {
  const scrollRef = useRef(null);

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
          <div
            className={`flex items-center mb-2 ${
              message.isAuthor ? " flex-row-reverse " : " flex-row "
            }`}
          >
            <Avatar className="w-10 h-10 mx-2 -z-10" {...message.avatar} />
            <h4 className="text-2xl font-semibold">{message.sender}</h4>
          </div>
        )}
        <div
          className={`px-3 border ${
            message.isAuthor
              ? " bg-sky-100 border-sky-200 "
              : " bg-gray-200 border-gray-300 "
          }${
            !prevMessage ||
            prevMessage.senderId !== message.senderId ||
            message.time - prevMessage.time > 60 * 2
              ? " pt-1 rounded-t-lg border-b-0 "
              : " border-t-0 border-b-0 "
          }${
            !nextMessage ||
            nextMessage.senderId !== message.senderId ||
            nextMessage.time - message.time > 60 * 2
              ? " shadow-lg pb-1 rounded-b-lg border-t-0 "
              : ""
          }`}
        >
          {message.messageContent}
        </div>
        {!nextMessage ? (
          <TimePassed time={message.time} />
        ) : nextMessage.senderId !== message.senderId ||
          nextMessage.time - message.time > 60 * 2 ? (
          <TimePassed time={message.time} />
        ) : null}
      </div>
    );
  });

  useLayoutEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="flex flex-col flex-grow w-full min-h-full px-8 overflow-auto my-3">
      {messagesList}
      <div ref={scrollRef} className="scroll-mb-40" />
    </div>
  );
};

export default Messages;
