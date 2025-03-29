import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Ensure this file exists and follows App.css

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
      <li><Link to="/Dashboard">☰</Link></li>
        <li><Link to="/profile">👤</Link></li>
        <li><Link to="/files">📂</Link></li>
        <li><Link to="/schedule">📅</Link></li>
        <li><Link to="/Clock"> 🕗</Link></li>
        <li><Link to="/settings">⚙️</Link></li>
        
      </ul>
    </nav>
  );
}
