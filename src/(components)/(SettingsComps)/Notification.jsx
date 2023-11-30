import { switch_active_icon } from "../../assets/image";

const Notification = () => {
  return (
    <section className="notification_sec">
      <div className="notification_inner">
        {/* SETTINGS HEADER */}
        <div className="settings_header">
          <div className="settings_header_inner">
            <div className="settings_header_left">
              <h4>account settings</h4>
              <p>Adjust whichever setting you want here</p>
            </div>
            <div className="settings_header_right">
              <button className="hover_animation small"> cancel </button>
              <button className="hover_animation small">save changes</button>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="notification_main">
          <div className="notification_main_inner">
            <ul>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
              {/*  */}
              <li>
                <div>
                  <h6>Security Alerts</h6>
                  <p>Adjust your security settings here you want here</p>
                </div>

                <img src={switch_active_icon} alt="switch-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
