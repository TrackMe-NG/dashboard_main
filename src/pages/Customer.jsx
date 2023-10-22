import { Reviews } from "../(components)/Reviews";
import { TopCustomer } from "../(components)/TopCustomer";
import { UsersComps } from "../(components)/UsersComps";
import DashboardLayout from "../layouts/DashboardLayout";

export const Customer = () => {
  return (
    <>
      <DashboardLayout>
        <div className="customer">
          <div className="customer_inner">
            {/* USERS TABLE */}
            <div className="customer_left">
              <UsersComps />
            </div>

            <div className="customer_right">
              {/* TOP CUSTOMER */}
              <div>
                <TopCustomer />
              </div>
              {/* TOP CUSTOMER */}
              <div>
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
