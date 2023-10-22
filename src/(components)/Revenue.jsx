import { revenue_chart } from "../assets/image";

export const Revenue = () => {
  return (
    <>
      <div className="revenue">
        <div className="revenue_inner">
          <h4>revenue</h4>

          <img src={revenue_chart} alt="chart" />

          <div className="revenue_bottom">
            <ul>
              <li>
                <span className="colored_box first"></span>
                2023
              </li>
              <li>
                <span className="colored_box second"></span>
                2022
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
