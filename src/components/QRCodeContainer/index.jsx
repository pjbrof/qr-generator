import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

const QRCodeContainer = () => {
  const myRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      myRef.current,
      "foo",
      { width: window.innerWidth * 0.5 },
      (error) => {
        if (error) throw new Error(error);
      }
    );
  });

  return <canvas ref={myRef}></canvas>;
};

export default QRCodeContainer;
