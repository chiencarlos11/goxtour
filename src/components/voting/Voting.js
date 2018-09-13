import React, { Component } from "react";
import "./voting.css";
import data from "../../data/voting.json";

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option1_selected: "votingBox",
      option2_selected: "votingBox",
      option3_selected: "votingBox",
      option4_selected: "votingBox",
      option5_selected: "votingBox",

      vote_button: "disabledVoteButton"
    };
  }

  handleSelectClicked(imageId) {
    this.setState({ option1_selected: "disabledVotingBox" });
    this.setState({ option2_selected: "disabledVotingBox" });
    this.setState({ option3_selected: "disabledVotingBox" });
    this.setState({ option4_selected: "disabledVotingBox" });
    this.setState({ option5_selected: "disabledVotingBox" });

    if (imageId == 1) this.setState({ option1_selected: "votingBox" });
    if (imageId == 2) this.setState({ option2_selected: "votingBox" });
    if (imageId == 3) this.setState({ option3_selected: "votingBox" });
    if (imageId == 4) this.setState({ option4_selected: "votingBox" });
    if (imageId == 5) this.setState({ option5_selected: "votingBox" });

    this.setState({ vote_button: "voteButton" });
  }

  render() {
    return (
      <div className="container-voting">
        <div className={this.state.option1_selected}>
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div
            className="selectButton"
            onClick={() => {
              this.handleSelectClicked(1);
            }}
          >
            SELECT
          </div>
        </div>
        <div className={this.state.option2_selected}>
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div
            className="selectButton"
            onClick={() => {
              this.handleSelectClicked(2);
            }}
          >
            SELECT
          </div>
        </div>
        <div className={this.state.option3_selected}>
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div
            className="selectButton"
            onClick={() => {
              this.handleSelectClicked(3);
            }}
          >
            SELECT
          </div>
        </div>
        <div className={this.state.option4_selected}>
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div
            className="selectButton"
            onClick={() => {
              this.handleSelectClicked(4);
            }}
          >
            SELECT
          </div>
        </div>
        <div className={this.state.option5_selected}>
          <img
            className="votingImage"
            src="https://scontent-iad3-1.cdninstagram.com/vp/1f5344a40e9cd2b2405c0232cdbe5f8e/5C27CF1D/t51.2885-15/fr/e15/s1080x1080/40543138_294790494638880_8047632972603841698_n.jpg?ig_cache_key=MTg2NzE1MDQzMTEwOTc4MjY0OQ%3D%3D.2"
          />
          <div
            className="selectButton"
            onClick={() => {
              this.handleSelectClicked(5);
            }}
          >
            SELECT
          </div>
        </div>
        <div className="voteButtonLine">
          <div className={this.state.vote_button}>VOTE</div>
        </div>
      </div>
    );
  }
}

export default Voting;
