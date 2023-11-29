import PropTypes from "prop-types";

const SettingsNav = ({ settingsItems, selectedItem, onItemClick }) => {
  return (
    <aside className="settings_nav">
      <div className="settings_nav_inner">
        <ul>
          {settingsItems.map((item) => (
            <li
              className={`hover_animation small ${
                selectedItem.id === item.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() => onItemClick(item)}
            >
              <img
                src={
                  selectedItem.id === item.id
                    ? item.icon_src_active
                    : item.icon_src
                }
                alt="nav-icon"
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

SettingsNav.propTypes = {
  settingsItems: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SettingsNav;
