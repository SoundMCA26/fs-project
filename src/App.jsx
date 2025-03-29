import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Files from "./pages/Files";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import Clock from "./pages/Clock";
import RoomDashboard from "./pages/Dashboard"; // Import your default page
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Routes>
          {/* Default route that redirects to RoomDashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<RoomDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/files" element={<Files />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </div>
    </div>
  );
}
