import { useState } from "react";
import SettingsNav from "../(components)/SettingsNav";
import {
  dashboard_dark_icon,
  dashboard_primary_icon,
  shopping_bag_icon,
  shopping_bag_primary_icon,
  subscription_dark_icon,
  subscription_primary_icon,
} from "../assets/image";
import AccountSettings from "../(components)/(SettingsComps)/AccountSettings";
import Security from "../(components)/(SettingsComps)/Security";
import Notification from "../(components)/(SettingsComps)/Notification";

const SettingsLayout = () => {
  const [selectedItem, setSelectedItem] = useState(settingsItems[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="settings_main">
        <div className="settings_main_inner">
          <div className="settings_main_left">
            {/* SIDENAV SECTION */}
            <div className="sidenav_main">
              <SettingsNav
                settingsItems={settingsItems}
                selectedItem={selectedItem}
                onItemClick={handleItemClick}
              />
            </div>
          </div>
          <div className="settings_main_right">
            <div className="settings_main_right_inner">
              {/* MAIN CONTENTS */}
              <div className="settings_main_contents">{selectedItem.comps}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;

const settingsItems = [
  {
    id: 1,
    icon_src: dashboard_dark_icon,
    icon_src_active: dashboard_primary_icon,
    title: "account settings",
    comps: <AccountSettings />,
  },

  {
    id: 2,
    icon_src: shopping_bag_icon,
    icon_src_active: shopping_bag_primary_icon,
    title: "Security",
    comps: <Security />,
  },

  {
    id: 3,
    icon_src: subscription_dark_icon,
    icon_src_active: subscription_primary_icon,
    title: "Notification",
    comps: <Notification />,
  },
];
