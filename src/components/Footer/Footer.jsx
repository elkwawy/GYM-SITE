import "./Footer.css";
import github from "../../images/github.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import loge from "../../images/loge-ak.png";
function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="socail-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="loge loge-f">
          <img className="loge-img" src={loge} alt=""></img>
          <div className="loge-text">
            <span>AK Body</span>
            <span>Building</span>
          </div>
        </div>
      </div>

      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>
    </div>
  );
}

export default Footer;
