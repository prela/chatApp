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
        style={{
          textAlign: message.isAuthor ? "right" : "left",
        }}
      >
        {prevMessage && prevMessage.senderId === message.senderId ? null : (
          <h4>{message.sender}</h4>
        )}
        <div>{message.messageContent}</div>
        {!nextMessage ? (
          <TimePassed time={message.time} />
        ) : (nextMessage && nextMessage.senderId !== message.senderId) ||
          (nextMessage && nextMessage.time - message.time > 60 * 3) ? (
          <TimePassed time={message.time} />
        ) : null}
      </div>
    );
  });

  useLayoutEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages])

  return (
    <div ref={scrollRef}>
      {messagesList}
    </div>
  );
};

export default Messages;
