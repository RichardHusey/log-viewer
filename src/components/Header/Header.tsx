import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="app-header" role="banner">
     
      <h1 id="main-title">Cribl Log Viewer</h1>
      
      <p aria-describedby="main-title">
        Streaming logs directly from the server
      </p>
    </header>
  );
};

export default Header;
