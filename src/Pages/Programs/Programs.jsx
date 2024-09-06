import "./Programs.css";
import { programsData } from "../../data/programs";
import RightArrow from "../../images/rightArrow.png";
function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header" id="programs">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text"> To shape you</span>
      </div>
      {/* categories */}
      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div key={program.id} className="category">
            {program.image}  
            <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
