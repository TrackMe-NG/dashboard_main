import { useLocation } from "react-router-dom";
import { sub_user_icon } from "../assets/image";

export const UsersComps = () => {
  const location = useLocation();
  const isCustomerRoute = location.pathname === "/customer";

  return (
    <>
      <div className={`subscription ${isCustomerRoute ? "pageHeight" : ""}`}>
        <div className="subscription_inner">
          <div className="subscription_top">
            <h4>Users</h4>

            <p>See all</p>
          </div>
          <div className="subscription_table">
            <div className="subscription_table_nav">
              <ul>
                <li>Profile</li>
                <li>Product</li>
                <li>Location</li>
              </ul>
            </div>

            <div
              className={`subscription_table_data ${
                isCustomerRoute ? "pageTableHeight" : ""
              }`}
            >
              {usersData.map(
                (
                  { icon_src, fullName, userName, product, state, country },
                  index
                ) => {
                  return (
                    <div key={index} className="table_data_box">
                      <div className="table_data_box_inner">
                        <div
                          className={`table_data_profile ${
                            isCustomerRoute ? "pageProfileWidth" : ""
                          }`}
                        >
                          <img src={icon_src} alt="profile-pic" />

                          <div>
                            <h5 className="fullname">{fullName}</h5>

                            <span className="username">{userName}</span>
                          </div>
                        </div>

                        <div className="table_data_product">
                          <h5 className="primary_text">{product} security</h5>
                        </div>
                        <div className="table_data_status">
                          <h5>
                            {state}, {country}
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* USERS DATA */
const usersData = [
  {
    id: 1,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 2,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 3,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 4,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 5,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 6,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 7,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 8,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 9,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    state: "Lagos",
    country: "Nigeria",
    price: "1000",
  },
  {
    id: 10,
    icon_src: sub_user_icon,
    fullName: "Seyi Bolufemi TrackMeNg",
    userName: "Ad_Commander",
    product: "private",
    state: "Lagos",
    country: "Nigeria",
    price: "1,000,000",
  },
];
