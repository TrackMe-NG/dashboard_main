import { useState } from "react";
import {
  calender_icon,
  group_dark_icon,
  orders_play_dark_icon,
  sales_icon,
  user_small_icon,
} from "../assets/image";
import { useLocation } from "react-router-dom";

export const SummaryComps = () => {
  const [activeBtn, setActiveBtn] = useState(buttonsData[0].id);
  const location = useLocation();
  const isProductRoute = location.pathname === "/product";

  const handleButtonClick = (buttonId) => {
    setActiveBtn(buttonId === activeBtn ? "" : buttonId);
  };

  return (
    <>
      <div className="summary">
        <div className="summary_inner">
          <div className="summary_top">
            <div className="summary_top_left">
              <h4>Today&apos;s summary</h4>
              <p>Free & Subscribers</p>
            </div>
            {isProductRoute && (
              <div className="summary_top_middle">
                <div className="summary_top_middle_inner">
                  {buttonsData.map((button) => (
                    <button
                      key={button.id}
                      className={button.id === activeBtn ? "btn_active" : ""}
                      onClick={() => handleButtonClick(button.id)}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="summary_top_right">
              <img src={calender_icon} alt="icon" />

              <p>Mon, 25 - 09 - 2023</p>
            </div>
          </div>

          <div className="summary_bottom">
            <div className="summary_bottom_inner">
              {summaryItems.map((summaryItem, index) => (
                <div key={index} className="summary_box hover_animation small">
                  <div className="summary_box_inner">
                    <div className="summary_box_top">
                      <img src={summaryItem.icon_src} alt="icon" />
                      <h5>{summaryItem.amount}</h5>
                    </div>

                    <div className="summary_box_bottom">
                      <p>
                        {summaryItem.text_dark}
                        <span>{summaryItem.extra_text}</span>
                      </p>
                      <span>{summaryItem.colored_text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const buttonsData = [
  {
    id: 1,
    label: "Individual Security",
  },
  {
    id: 2,
    label: "Private Security",
  },
];

const summaryItems = [
  {
    id: 1,
    icon_src: group_dark_icon,
    amount: "5.8m",
    text_dark: "Total Users",
    extra_text: "",
    colored_text: "+19% increase from yesterday",
  },
  {
    id: 2,
    icon_src: sales_icon,
    amount: "3.2m",
    text_dark: "Total Subscribers",
    extra_text: "",
    colored_text: "+25% increase from yesterday",
  },
  {
    id: 3,
    icon_src: orders_play_dark_icon,
    amount: "953k",
    text_dark: "Active Subscribers",
    extra_text: "",
    colored_text: "+17% increase from yesterday",
  },
  {
    id: 4,
    icon_src: user_small_icon,
    amount: "156k",
    text_dark: "New Users",
    extra_text: "(Past 1 month)",
    colored_text: "+17% increase from yesterday",
  },
];
