import { Header } from "./(components)/Header";
import { SideNav } from "./(components)/SideNav";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_main">
        <div className="dashboard_main_inner">
          <div className="dashboard_main_left">
            {/* SIDENAV SECTION */}
            <div className="sidenav_main">
              <SideNav />
            </div>
          </div>
          <div className="dashboard_main_right">
            <div className="dashboard_main_right_inner">
              {/* HEADER SECTION */}
              <Header />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
