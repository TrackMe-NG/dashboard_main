import AccountSettings from "../(components)/(SettingsComps)/AccountSettings";
import DashboardLayout from "../layouts/DashboardLayout";
import SettingsLayout from "../layouts/SettingsLayout";

export const Settings = () => {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <div className="settings_sec">
          <div className="settings_inner">
            {/* MAIN */}
            <AccountSettings />
          </div>
        </div>
      </SettingsLayout>
    </DashboardLayout>
  );
};
