import React from "react";
import "./Header.css";
import Loge from "../../images/loge-ak.png";
import { Link } from "react-scroll";
function Header() {
  return (
    <div className="header">
      <div className="loge">
        <img className="loge-img" src={Loge} alt=""></img>
        <div className="loge-text">
          <span>AK Body</span>
          <span>Building</span>
        </div>
      </div>
      <div
        className="bars"
        onClick={() => {
          document.querySelector(".header-menu").classList.toggle("active");
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="header-menu">
        <li>
          <Link
            to={"home"}
            smooth={true}
            onClick={() =>
              document.querySelector(".header-menu").classList.remove("active")
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"programs"}
            smooth={true}
            onClick={() =>
              document.querySelector(".header-menu").classList.remove("active")
            }
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="why-us"
            smooth={true}
            onClick={() =>
              document.querySelector(".header-menu").classList.remove("active")
            }
          >
            Why Us
          </Link>
        </li>
        <li>
          <Link
            to="plans"
            smooth={true}
            onClick={() =>
              document.querySelector(".header-menu").classList.remove("active")
            }
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            onClick={() =>
              document.querySelector(".header-menu").classList.remove("active")
            }
          >
            Testimonials
          </Link>
        </li>
        {/* <li>Transformations</li>*/}
      </ul>
    </div>
  );
}

export default Header;
