import React from "react";

const Modal1 = ({ isOpen1, onClose1, children }) => {
  if (!isOpen1) return null;

  return (
    <>
      <div
        onClick={onClose1}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "transparent",
            height: "100%",
            width: "100%",
            padding: "2%",
            marginLeft: "200PX",
            borderRadius: "10px",
            boxShadow: "2px solid black",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal1;
