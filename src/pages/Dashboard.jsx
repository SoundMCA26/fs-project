import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <button
          className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
        <button
          className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          onClick={() => navigate("/files")}
        >
          Files
        </button>
        <button
          className="p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
          onClick={() => navigate("/schedule")}
        >
          Schedule
        </button>
        <button
          className="p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
          onClick={() => navigate("/settings")}
        >
          Settings
        </button>
        <button
          className="p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={() => navigate("/analytics")}
        >
          Analytics
        </button>
        <button
          className="p-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600"
          onClick={() => navigate("/study-planner")}
        >
          Study Planner
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
