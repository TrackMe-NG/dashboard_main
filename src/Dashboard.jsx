import DashboardLayout from "./layouts/DashboardLayout";
import { Summary } from "./(components)/Summary";
import { Subscription } from "./(components)/Subscription";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        {/* SUMMARY SECTION */}
        <Summary />

        {/* SUBSCRIPTION SECTION */}
        <Subscription />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
