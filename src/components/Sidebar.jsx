import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Ensure this file exists and follows App.css

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/profile">👤 Profile</Link></li>
        <li><Link to="/files">📂 Files</Link></li>
        <li><Link to="/schedule">📅 Schedule</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
        <li><Link to="/Clock"> Clock</Link></li>
      </ul>
    </nav>
  );
}
