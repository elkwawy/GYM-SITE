import "./WhyUs.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import nb from "../../images/nb.png";
import adidas from "../../images/adidas.png";
import nike from "../../images/nike.png";
import tick from "../../images/tick.png";
function WhyUs() {
  return (
    <div className="why-us" id="why-us">
      <div className="left-w">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-w">
        <span>some reasons</span>
        <div className="wty-c-us">
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
          <span className="partners">OUR PARTNERS</span>
          <div className="partners-logo">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
