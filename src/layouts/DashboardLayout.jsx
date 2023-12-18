import PropTypes from "prop-types";
import { Header } from "../(components)/Header";
import { SideNav } from "../(components)/SideNav";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth > 992 ? (
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
      ) : (
        <>
          <div className="error_page_sec">
            <div className="error_page_sec_inner">
              <h2>opps!</h2>

              <p className="quotes">
                mobile-screen coming soon... <br />
                <br />
                screen-size &gt; 992px to view this application
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
