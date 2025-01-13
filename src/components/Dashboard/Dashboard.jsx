import OverviewCard from "../OverviewCard/OverviewCard";
import QuickActions from "../QuickActions/QuickActions";
import List from "../List/List";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="back">
      <h2>Welcome Back David</h2>
      <div className='cv4'>
          <p>davideshett5@gmail.com</p>
        </div>
      </div>
      <div className="overview">
        <OverviewCard title="Messages" count={26} />
        <OverviewCard title="Services" count={4} />
        <OverviewCard title="Projects" count={3} />
        <OverviewCard title="Organisations" count={4} />
      </div>
      <div className="group">
      <QuickActions />
      <div className="lists">
        <List title="Organisations" items={["CHITHUB COMPANY LTD", "KASTLEA", "SERVICOM", "DDHOMES", "INEC"]} />
        <List title="Services" items={["User Experience", "Backend development", "APNR Installation", "CCTV Installation", "Database Management"]} />
        <List title="Skills" items={["C#", "Docker", "RabbitMq", "SqlServer", "MongoDb"]} />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
