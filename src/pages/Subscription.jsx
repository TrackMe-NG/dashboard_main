import { Revenue } from "../(components)/Revenue";
import { SubscriptionComps } from "../(components)/SubscriptionComps";
import { TopSeller } from "../(components)/TopSeller";
import DashboardLayout from "../layouts/DashboardLayout";

export const Subscription = () => {
  return (
    <>
      <DashboardLayout>
        <div className="subscription_page">
          {/* SUBSCRIPTION COMPS SEC */}
          <div className="subscription_page_left">
            <SubscriptionComps />
          </div>

          <div className="subscription_page_right">
            <div>
              <TopSeller />
            </div>

            <div>
              <Revenue />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
