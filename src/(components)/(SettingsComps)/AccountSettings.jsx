import { user_round_icon } from "../../assets/image";

const AccountSettings = () => {
  return (
    <div>
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
      </div>{" "}
      {/* SETTINGS ACCT */}
      <div className="settings_acct">
        <div className="settings_acct_inner">
          <h5 className="header_special">Profile Picture Upload</h5>

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

          {/* USER FORM */}

          <div className="user_form">
            <div className="user_form_inner">
              <div className="information_sec">
                <h5>information</h5>

                <div className="user_form_inputs">
                  {/*  */}
                  <div>
                    <span>username</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>email address</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>phone number</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>fax</span>
                    <input type="text" />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="address_sec">
                <h5>address</h5>

                <div className="user_form_inputs">
                  {/*  */}
                  <div>
                    <span>country</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>state</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>local govt</span>
                    <input type="text" />
                  </div>
                  {/*  */}
                  <div>
                    <span>postal code</span>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
