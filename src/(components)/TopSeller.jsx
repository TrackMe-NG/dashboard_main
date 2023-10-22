import { sub_user_icon } from "../assets/image";

export const TopSeller = () => {
  return (
    <>
      <div className="topseller">
        <div className="topseller_inner">
          <h4 className="topseller_header">top seller</h4>

          <div className="topseller_top">
            <div className="topseller_top_inner">
              <img src={sub_user_icon} alt="user-img" />

              <p>
                Private <br /> Security
              </p>
            </div>
          </div>

          <div className="topseller_bottom">
            <div className="topseller_bottom_inner">
              <div>
                <h6>target</h6>

                <span>&#8358; 92k</span>
              </div>
              <div>
                <h6 className="reach_header">reach</h6>

                <span>&#8358; 168k</span>
              </div>
            </div>
          </div>

          <button className="topseller_btn hover_animation small">
            view detail
          </button>
        </div>
      </div>
    </>
  );
};
