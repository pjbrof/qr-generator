import React, { useState, useRef } from "react";

const Generator = () => {
  const [message, setMessage] = useState(null);
  const messageInput = useRef();

  return (
    <div className="generator">
      <input type="text" ref={messageInput} defaultValue={message} />
      <button onClick={() => setMessage(messageInput.current.value)}>
        Generate
      </button>
    </div>
  );
};

export default Generator;
