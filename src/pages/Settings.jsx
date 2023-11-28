import { user_round_icon } from "../assets/image";
import DashboardLayout from "../layouts/DashboardLayout";
import SettingsLayout from "../layouts/SettingsLayout";

export const Settings = () => {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <div className="settings_sec">
          <div className="settings_inner">
            {/* SETTINGS HEADER */}
            <div className="settings_header">
              <div className="settings_header_inner">
                <div className="settings_header_left">
                  <h4>account settings</h4>
                  <p>Adjust whichever setting you want here</p>
                </div>
                <div className="settings_header_right">
                  <button className="hover_animation small"> cancel </button>
                  <button className="hover_animation small">
                    save changes
                  </button>
                </div>
              </div>
            </div>

            {/* SETTINGS ACCT */}
            <div className="settings_acct">
              <div className="settings_acct_inner">
                <h5>Profile Picture Upload</h5>

                <div className="user_details">
                  <div className="user_details_inner">
                    <div className="user_details_left">
                      <img src={user_round_icon} alt="user" />
                      <div>
                        <h6>Omosanyin Elijah Ayomide</h6>
                        <span>admin</span>
                      </div>
                    </div>
                    <div className="user_details_right">
                      <button className="hover_animation small">
                        upload new photo
                      </button>
                      <button className="hover_animation small">delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SettingsLayout>
    </DashboardLayout>
  );
};
