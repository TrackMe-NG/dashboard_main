import { useState } from "react";
import {
  dashboard_dark_icon,
  dashboard_white_icon,
  logo_icon,
  logout_icon,
  settings_dark_icon,
  settings_white_icon,
  shopping_bag_icon,
  shopping_bag_white_icon,
  subscription_dark_icon,
  subscription_white_icon,
  support_dark_icon,
  support_white_icon,
  update_rotate_icon,
  user_dark_icon,
  user_white_icon,
} from "../assets/image";

export const SideNav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_inner">
          <div className="sidebar_logo">
            <a href="/">
              <img src={logo_icon} alt="logo" />
            </a>
          </div>

          <ul className="sidebar_menu_list">
            {menItems.map((item, i) => (
              <li
                className={`${active ? "" : "active"}`}
                onClick={() => setActive(!active)}
                key={i}
              >
                <img
                  src={active ? item?.icon_src : item?.icon_src_active}
                  alt="icon"
                />
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>

          {/* NEW UPDATE SECTION */}
          <div className="sidebar_update">
            <div className="sidebar_update_inner">
              <img src={update_rotate_icon} alt="icon" />

              <p>New Update Available</p>

              <button className="btn_main">Update</button>
            </div>
          </div>

          <ul className="sidebar_menu_list">
            <li className="logout">
              <img src={logout_icon} alt="icon" />
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

const menItems = [
  {
    id: 1,
    icon_src: dashboard_dark_icon,
    icon_src_active: dashboard_white_icon,
    title: "dashboard",
  },
  {
    id: 2,
    icon_src: shopping_bag_icon,
    icon_src_active: shopping_bag_white_icon,
    title: "product",
  },
  {
    id: 3,
    icon_src: subscription_dark_icon,
    icon_src_active: subscription_white_icon,
    title: "subscription",
  },
  {
    id: 4,
    icon_src: user_dark_icon,
    icon_src_active: user_white_icon,
    title: "customer",
  },
  {
    id: 5,
    icon_src: support_dark_icon,
    icon_src_active: support_white_icon,
    title: "support",
  },
  {
    id: 6,
    icon_src: settings_dark_icon,
    icon_src_active: settings_white_icon,
    title: "settings",
  },
];
