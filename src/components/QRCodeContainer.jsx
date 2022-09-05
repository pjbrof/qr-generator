import React, { useRef, useState } from "react";
import QRCode from "qrcode";

const QRCodeContainer = () => {
  const [message, setMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const qrCode = useRef();

  const adjustQRSize = () => {
    // height offset - 12rem * 16px
    return window.innerHeight - 14 * 16;
  };

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const generateCode = () => {
    QRCode.toCanvas(
      qrCode.current,
      message,
      { width: adjustQRSize() },
      (error) => {
        if (error) throw new Error(error);
      }
    );
    setLastMessage(message);
  };

  return (
    <>
      <div className="qr">
        <canvas ref={qrCode}></canvas>
        <input type="text" onChange={(e) => handleInput(e)} value={message} />
        <button
          className={
            message === lastMessage || message === "" ? "input-error" : ""
          }
          onClick={() => generateCode()}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default QRCodeContainer;
