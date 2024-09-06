import "./Plans.css";
import { plansData } from "../../data/plans";
import whiteTick from "../../images/whiteTick.png";
function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="plans-header">
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="plans">
        {plansData.map((plan, ind) => {
          return (
            <div key={ind} className="plan">
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div key={i} className="feature">
                      <img src={whiteTick} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div className="see-more">
                <span>See more benefits {"->"}</span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
