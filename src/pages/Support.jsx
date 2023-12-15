import {
  camera_icon,
  dark_user_icon,
  emoji_icon,
  file_icon,
  mic_icon2,
  send_icon,
} from "../assets/image";
import DashboardLayout from "../layouts/DashboardLayout";

export const Support = () => {
  return (
    <>
      <DashboardLayout>
        <div className="support">
          <div className="support_inner">
            {/* SUPPORT SIDEBAR */}
            <aside className="support_sidebar">
              <div className="support_sidebar_inner">
                {/* SIDEBAR TOP */}
                <div className="support_sidebar_top">
                  <ul>
                    <li className="active">unread</li>
                    <li className="">read</li>
                  </ul>
                </div>

                {/* SIDEBAR BOTTOM */}
                <div className="support_sidebar_bottom">
                  <div className="support_sidebar_bottom_inner">
                    <span>today</span>

                    <ul>
                      {userData.map(({ id, username, position }) => (
                        <li key={id}>
                          <img src={dark_user_icon} alt="user-icon" />

                          <div>
                            <h3>{username}</h3>
                            <span>{position}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {/*  */}
                  </div>
                </div>
              </div>
            </aside>

            {/*  SUPPORT CHATBOX */}

            <div className="support_chatbox">
              <div className="support_chatbox_inner">
                {/* TOP */}
                <div className="support_chatbox_top">
                  <ul>
                    <li>
                      <img src={dark_user_icon} alt="user-icon" />

                      <div>
                        <h3>Omosanyin Elijah Ayomide</h3>
                        <span>Sanyin&apos;sUX</span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* MIDDLE */}
                <div className="support_chatbox_middle">
                  <div className="support_chatbox_middle_inner">
                    <div className="support_chatbox_middle_left">
                      <div className="support_chatbox_middle_left_inner">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Diam enim at a
                          urna quis fames adipiscing scelerisque. Et consectetur
                          elit feugiat ante lacus integer amet ornare. Vitae mi
                          adipiscing viverra hac. Elit facilisis fames non
                          potenti cursus et dui. Sit pharetra faucibus gravida
                          odio proin nisi pellentesque.{" "}
                        </p>
                      </div>

                      <p className="time_format">
                        02:55 PM <span>Sent</span>
                      </p>
                    </div>
                    {/*  */}
                    <div className="support_chatbox_middle_right">
                      <div className="support_chatbox_middle_right_inner">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Diam enim at a
                          urna quis fames adipiscing scelerisque. Et consectetur
                          elit feugiat ante lacus integer amet ornare. Vitae mi
                          adipiscing viverra hac. Elit facilisis fames non
                          potenti cursus et dui. Sit pharetra faucibus gravida
                          odio proin nisi pellentesque.{" "}
                        </p>
                      </div>

                      <p className="time_format">
                        02:55 PM <span>Sent</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="support_chatbox_bottom">
                  <div className="support_chatbox_bottom_inner">
                    <img src={camera_icon} alt="icon" />
                    <img src={file_icon} alt="icon" />
                    <div>
                      <img src={emoji_icon} alt="icon" />
                      <input
                        type="text"
                        placeholder="Start your conversation"
                      />
                      <img src={mic_icon2} alt="icon" />
                    </div>

                    <button className="hover_animation small">
                      <img src={send_icon} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

const userData = [
  {
    id: 1,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 2,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 3,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 4,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 5,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 6,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 7,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 8,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 9,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 10,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
  {
    id: 11,
    username: "Omosanyin Elijah Ayomide",
    position: "Sanyin'sUX",
  },
];
