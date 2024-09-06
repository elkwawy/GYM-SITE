import React from "react";
import "./Hero.css";
import Header from "../../components/Header/Header";
import hero_image from "../../images/hero_image.png";
import hero_image_back from "../../images/hero_image_back.png";
import heart from "../../images/heart.png";
import calories from "../../images/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true : false;
function Hero() {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/* left side */}
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in The town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter preFix="+" start={80} end={150} delay={2} />
            </span>{" "}
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter preFix="+" start={500} end={600} delay={2} />
            </span>{" "}
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter preFix="+" start={100} end={120} delay={2} />
            </span>{" "}
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
      <div
        className="scrolltotop-btn"
        onClick={() => window.scrollTo(0, 0)}
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
