import React from "react";
// import {logo} from "./logo.png"
// import logo from "./logo.png";
import "./footer.css";
function Footer() {
  return (
    <React.Fragment>
      <div className="blend"></div>
      <div className="footer">
        <div className="heading">
          <img className="img1" src="https://media3.giphy.com/media/KFnSuizdGVCtkVFOXM/source.gif" />
        </div>
        <div className="conw">
          <div className="contacts1">
            <h1>About Us</h1>
            <p>
              We are here to provide free services to our customers.People who
              are not financially stable to use the ORIGINAL NETFLIX. we provide
              you with the best and the upcoming movies in the market and their
              trailers as well as their brief information and rating.
              Do support us and follow us on instagram and linkedin for further updates.
            </p>
          </div>
          <div className="contacts">
            <h1>Contact Us On:-</h1>
            <ul>
              <li>
                <a href="https://www.instagram.com/aditayyyyyyyyy/">insta</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100063579615355">facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aditya-verma-089746203/">linkedin</a>
              </li>
              <li>
                <a href="https://github.com/adi-alt">github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
