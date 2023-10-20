import { sub_user_icon } from "../assets/image";

export const Subscription = () => {
  return (
    <>
      <div className="subscription">
        <div className="subscription_inner">
          <div className="subscription_top">
            <h4>recent subscription</h4>

            <p>See all</p>
          </div>
          <div className="subscription_table">
            <div className="subscription_table_nav">
              <ul>
                <li>Profile</li>
                <li>Product</li>
                <li>Status</li>
                <li>Price</li>
              </ul>
            </div>

            <div className="subscription_table_data">
              {usersData.map(
                (
                  { icon_src, price, fullName, userName, product, status },
                  index
                ) => {
                  let statusColor;
                  if (status == "Declined") {
                    statusColor = "#FF0000";
                  } else if (status == "pending") {
                    statusColor = "#FCA825";
                  } else if (status == "successful") {
                    statusColor = "#00CA54";
                  } else {
                    statusColor = "#1a1c19";
                  }

                  return (
                    <div key={index} className="table_data_box">
                      <div className="table_data_box_inner">
                        <div className="table_data_profile">
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
                          <h5 style={{ color: statusColor }}>{status}</h5>{" "}
                        </div>
                        <div className="table_data_price">
                          <h5> &#8358; {price}</h5>
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
    status: "Declined",
    price: "1000",
  },
  {
    id: 2,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    status: "pending",
    price: "1000",
  },
  {
    id: 3,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    status: "successful",
    price: "1000",
  },
  {
    id: 4,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    status: "successful",
    price: "1000",
  },
  {
    id: 5,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    status: "successful",
    price: "1000",
  },
  {
    id: 6,
    icon_src: sub_user_icon,
    fullName: "Omosanyin Elijah Ayomide",
    userName: "Sanyins_UX",
    product: "individual",
    status: "successful",
    price: "1000",
  },
  {
    id: 7,
    icon_src: sub_user_icon,
    fullName: "Seyi Bolufemi TrackMeNg",
    userName: "Ad_Commander",
    product: "private",
    status: "successful",
    price: "1,000,000",
  },
];
