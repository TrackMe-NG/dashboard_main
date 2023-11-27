import PropTypes from "prop-types";
import { Header } from "../(components)/Header";
import { SideNav } from "../(components)/SideNav";

const DashboardLayout = ({ children }) => {
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

              {/* MAIN CONTENTS */}
              <div className="dashboard_main_contents">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
