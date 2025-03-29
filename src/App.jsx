import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Files from "./pages/Files";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Routes> {/* ✅ Only use <Routes> here, no <Router> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/files" element={<Files />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
