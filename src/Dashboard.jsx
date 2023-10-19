import { Header } from "./(components)/Header";
import { SideNav } from "./(components)/SideNav";
import { Summary } from "./(components)/Summary";

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
              <div>
                <Header />
              </div>
              {/* SUMMARY SECTION */}
              <div>
                <Summary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
