import {
  dashboard_dark_icon,
  dashboard_primary_icon,
  shopping_bag_icon,
  shopping_bag_primary_icon,
  subscription_dark_icon,
  subscription_primary_icon,
} from "../assets/image";

const SettingsNav = () => {
  return (
    <aside className="settings_nav">
      <div className="settings_nav_inner">
        <ul>
          {settingsItems.map((item) => (
            <li className="hover_animation small" key={item.id}>
              <img src={item.icon_src} alt="nav-icon" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SettingsNav;

const settingsItems = [
  {
    id: 1,
    icon_src: dashboard_dark_icon,
    icon_src_active: dashboard_primary_icon,
    title: "account settings",
    link: "/",
  },

  {
    id: 2,
    icon_src: shopping_bag_icon,
    icon_src_active: shopping_bag_primary_icon,
    title: "Security",
    link: "/",
  },

  {
    id: 3,
    icon_src: subscription_dark_icon,
    icon_src_active: subscription_primary_icon,
    title: "Notification",
    link: "/",
  },
];
