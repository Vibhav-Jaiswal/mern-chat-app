import React from "react";

const MessageSelf = () => {
  var props1 = { name: "You", message: "This is a Sample Message" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p className="con-lastMessage">{props1.message}</p>
        <p className="con-timeStamp">12:00am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
