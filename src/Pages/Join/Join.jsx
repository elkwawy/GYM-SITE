import "./Join.css";
function Join() {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span> Level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container">
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your Email Address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
