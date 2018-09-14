import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import "./info.css";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="infoBox">
        <div className="infoContainer">
          <div className="infoMain fontSite">
            <p className="fontLarger">
              <b>
                <u>How the Site Works</u>
              </b>
            </p>
            <p>
              &#xb7;&nbsp;&nbsp;Click on a Tour Member's image on the{" "}
              <u>Home</u> page to see where they are and where they’ve visited
            </p>
            <p>
              &#183;&nbsp;&nbsp;Click on <u>Gallery</u> to see all pics or
              videos from the Tour
            </p>
            <p>
              &#183;&nbsp;&nbsp;Click on <u>Travel Stats</u> to see how far each
              Tour Member has travelled during the week
            </p>
            <p className="fontRed">
              <u>NOTE:</u> Make sure you have your creative hats on when a Tour
              Member visits: Top 3 Best Pics from the Tour will win your branch
              or store $250 for your team and $250 donated to Boys and Girls
              Club on your behalf!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
