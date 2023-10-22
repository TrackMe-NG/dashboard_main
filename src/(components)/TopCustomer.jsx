import { sub_user_icon } from "../assets/image";

export const TopCustomer = () => {
  return (
    <>
      <div className="topcustomer">
        <div className="topcustomer_inner">
          <h4 className="header_medium">Top Customer</h4>
          <div className="topcustomer_body">
            <img src={sub_user_icon} alt="user-image" />

            <div className="topcustomer_details">
              <h6 className="text_light_dark">Omosanyin Elijah Aymoide</h6>

              <p className="text_btn_bg">Private Security</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
