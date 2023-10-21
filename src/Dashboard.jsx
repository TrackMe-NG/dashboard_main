import DashboardLayout from "./layouts/DashboardLayout";
import { SummaryComps } from "./(components)/SummaryComps";
import { SubscriptionComps } from "./(components)/SubscriptionComps";
import { Target } from "./(components)/Target";
import { Reviews } from "./(components)/Reviews";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        {/* SUMMARY SECTION */}
        <SummaryComps />
        <div className="dashboard_bottom_sec">
          {/* SUBSCRIPTION SECTION */}
          <div className="bottom_left">
            <SubscriptionComps />
          </div>

          <div className="bottom_right">
            {/* TARGET SECTION */}
            <Target />
            {/* TARGET SECTION */}
            <Reviews />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
