import React from "react";

export default function Header() {
  return (
    <header
      className="header"
      style={{
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: "#0091a5",
        borderRadius: "0px 0px 50px 50px",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <img
        src="../../public/rainbow.png"
        style={{
          width: "30px",
          marginRight: "10px"
        }}
      />
      <h1
        style={{
          fontSize: "1rem",
        }}
      >
        Text to Handwriting
      </h1>
    </header>
  );
}
