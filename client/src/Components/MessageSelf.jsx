import React from "react";

const MessageSelf = () => {
  var props1 = { name: "You", message: "This is a Sample Message" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props1.message}</p>
      </div>
    </div>
  );
};

export default MessageSelf;
