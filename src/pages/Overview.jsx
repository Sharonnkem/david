import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview-container">
      <Sidebar />
      <div className="dashboard-container">
        <Dashboard />
      </div>
    </div>
  );
};

export default Overview;
