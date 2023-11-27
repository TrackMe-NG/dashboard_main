import SettingsNav from "../(components)/SettingsNav";
import DashboardLayout from "../layouts/DashboardLayout";

export const Settings = () => {
  return (
    <DashboardLayout>
      <div className="settings_sec">
        <div className="settings_inner">
          <div>
            <SettingsNav />
          </div>

          <div>main</div>
        </div>
      </div>
    </DashboardLayout>
  );
};
