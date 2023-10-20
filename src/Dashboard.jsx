import DashboardLayout from "./layouts/DashboardLayout";
import { Summary } from "./(components)/Summary";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <Summary />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
