import { useLocation } from "react-router-dom";
import {
  reviews_user_icon,
  star_fill_icon,
  star_outline_icon,
} from "../assets/image";

export const Reviews = () => {
  const location = useLocation();
  const isCustomerRoute = location.pathname === "/customer";

  return (
    <>
      <div
        className={`reviews ${isCustomerRoute ? "isCustomerMainHeight" : ""}`}
      >
        <div className="reviews_inner">
          <h6 className="reviews_header">customer review</h6>
          <div
            className={`reviews_box_main ${
              isCustomerRoute ? "isCustomerHeight" : ""
            }`}
          >
            {reviewsData.map(({ img_src, fullName, stars }, index) => {
              return (
                <div key={index} className="reviews_box">
                  <div className="reviews_box_inner">
                    <div className="reviews_box_left">
                      <img src={img_src} alt={fullName} />

                      <h6>{fullName}</h6>
                    </div>

                    <ul className="reviews_box_right">
                      {stars.map((star, index) => (
                        <li key={index}>
                          <img src={star} alt="icon" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const reviewsData = [
  {
    id: 1,
    img_src: reviews_user_icon,
    fullName: "Sanyin's_UX",
    stars: [star_fill_icon, star_outline_icon, star_outline_icon],
  },
  {
    id: 2,
    img_src: reviews_user_icon,
    fullName: "Mr_seyifunmi",
    stars: [star_fill_icon, star_fill_icon, star_fill_icon],
  },
  {
    id: 3,
    img_src: reviews_user_icon,
    fullName: "Mr_dark9t",
    stars: [star_fill_icon, star_fill_icon, star_fill_icon],
  },
  {
    id: 4,
    img_src: reviews_user_icon,
    fullName: "Sadoh_den",
    stars: [star_fill_icon, star_fill_icon, star_outline_icon],
  },
  {
    id: 5,
    img_src: reviews_user_icon,
    fullName: "Den_dev",
    stars: [star_fill_icon, star_outline_icon, star_outline_icon],
  },
  {
    id: 6,
    img_src: reviews_user_icon,
    fullName: "Den_dev",
    stars: [star_fill_icon, star_outline_icon, star_outline_icon],
  },
  {
    id: 7,
    img_src: reviews_user_icon,
    fullName: "Den_dev",
    stars: [star_fill_icon, star_outline_icon, star_outline_icon],
  },
  {
    id: 8,
    img_src: reviews_user_icon,
    fullName: "Den_dev",
    stars: [star_fill_icon, star_outline_icon, star_outline_icon],
  },
];
