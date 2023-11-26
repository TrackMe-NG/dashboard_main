import { dashboard_primary_icon } from "../assets/image";

const SettingsNav = () => {
  return (
    <aside className="settings_nav">
      <div className="settings_nav_inner">
        <ul>
          <li>
            <img src={dashboard_primary_icon} alt="nav-icon" />
            account settings
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SettingsNav;
