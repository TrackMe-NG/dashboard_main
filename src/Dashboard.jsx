import DashboardLayout from "./layouts/DashboardLayout";
import { Summary } from "./(components)/Summary";
import { Subscription } from "./(components)/Subscription";
import { Target } from "./(components)/Target";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        {/* SUMMARY SECTION */}
        <Summary />
        <div className="dashboard_bottom_sec">
          {/* SUBSCRIPTION SECTION */}
          <div className="bottom_left">
            <Subscription />
          </div>

          <div className="bottom_right">
            {/* TARGET SECTION */}
            <Target />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
