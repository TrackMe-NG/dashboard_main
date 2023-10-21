import { eclipse_icon } from "../assets/image";

export const Target = () => {
  return (
    <>
      <div className="target">
        <div className="target_inner">
          <h6>target</h6>
          <div className="target_img">
            <img src={eclipse_icon} alt="icon" />
          </div>

          <h6>achieved</h6>
        </div>
      </div>
    </>
  );
};
