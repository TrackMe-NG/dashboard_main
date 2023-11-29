import { switch_active_icon } from "../../assets/image";

const Security = () => {
  return (
    <section className="security_sec">
      <div className="security_inner">
        {/* SETTINGS HEADER */}
        <div className="settings_header">
          <div className="settings_header_inner">
            <div className="settings_header_left">
              <h4>Security</h4>
              <p>Adjust your security settings here you want here</p>
            </div>
            <div className="settings_header_right">
              <button className="hover_animation small"> cancel </button>
              <button className="hover_animation small">save changes</button>
            </div>
          </div>
        </div>{" "}
        {/* MAIN */}
        <div className="security_main">
          <div className="security_main_inner">
            {/*  */}
            <div>
              <h5 className="header_special">Password Management</h5>
              <ul>
                <li>
                  <div>
                    <h6>Login Two-Step Verification</h6>
                    <p>Adjust your security settings here you want here</p>
                  </div>

                  <img src={switch_active_icon} alt="switch-icon" />
                </li>
                <li>
                  <div>
                    <h6>Email Set-up</h6>
                    <p>Adjust your security settings here you want here</p>
                  </div>

                  <img src={switch_active_icon} alt="switch-icon" />
                </li>
              </ul>{" "}
            </div>
            {/*  */}
            <div>
              <h5 className="header_special">Password Security</h5>
              <ul>
                <li>
                  <div>
                    <h6>Email Set-up</h6>
                    <p>Adjust your security settings here you want here</p>
                  </div>
                  <button>Change Password</button>{" "}
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
