import PropTypes from "prop-types";
import SettingsNav from "../(components)/SettingsNav";

const SettingsLayout = ({ children }) => {
  return (
    <>
      <div className="settings_main">
        <div className="settings_main_inner">
          <div className="settings_main_left">
            {/* SIDENAV SECTION */}
            <div className="sidenav_main">
              <SettingsNav />
            </div>
          </div>
          <div className="settings_main_right">
            <div className="settings_main_right_inner">
              {/* MAIN CONTENTS */}
              <div className="settings_main_contents">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;

SettingsLayout.propTypes = {
  children: PropTypes.node,
};
