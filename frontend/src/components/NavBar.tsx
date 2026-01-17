import React from "react";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#f0f8f0",
        padding: "10px 20px",
        borderBottom: "2px solid #2e8b57",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#2e8b57",
            fontSize: "24px",
          }}
        >
          Customer Feedback
        </h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#" style={navLinkStyle}>
            Home
          </a>
          <a href="#" style={navLinkStyle}>
            About
          </a>
          <a href="#" style={navLinkStyle}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: "#2e8b57",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "5px 10px",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};

export default NavBar;
