import React, { Component } from "react";
import "./voting.css";
import data from "../../data/voting.json";

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  shouldGreyOut(imageId) {
    if (this.state.selected == 0 || this.state.selected == imageId) {
      return "";
    }

    return "greyedOut";
  }

  render() {
    return (
      <div className="container-voting">
        <div className="votingBox">
          <img
            className="votingImage greyedOut"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div className="selectButton">SELECT</div>
        </div>
        <div className="votingBox">
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div className="selectButton">SELECT</div>
        </div>
        <div className="votingBox">
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div className="selectButton">SELECT</div>
        </div>
        <div className="votingBox">
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div className="selectButton">SELECT</div>
        </div>
        <div className="votingBox">
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div className="selectButton">SELECT</div>
        </div>
        <div className="voteButtonLine">
          <div className="voteButton">VOTE</div>
        </div>
      </div>
    );
  }
}

export default Voting;
