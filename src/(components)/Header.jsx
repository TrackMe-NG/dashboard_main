import {
  bell_dark_icon,
  chat_dark_icon,
  default_img,
  mic_icon,
  search_icon,
  switch_icon,
} from "../assets/image";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_inner">
          <div className="header_left">
            <h3>hello admin!</h3>
            <p>welcome back!</p>
          </div>

          <div className="header_middle">
            <div className="header_middle_inner">
              <img src={search_icon} alt="icon" />
              <input
                type="text"
                placeholder="Search whatever you wish to search here......."
              />
              <img src={mic_icon} alt="icon" />
            </div>
          </div>

          <div className="header_right">
            <div className="header_right_inner">
              <div className="switch">
                <img src={switch_icon} alt="icon" />
                <p>Light mode</p>
              </div>

              <img
                className="light_bg hover_animation"
                src={chat_dark_icon}
                alt="icon"
              />

              <img
                className="light_bg hover_animation"
                src={bell_dark_icon}
                alt="icon"
              />

              <img
                className="hover_animation"
                src={default_img}
                alt="default-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
