import React, { Component } from "react";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import "./voting.css";
import data from "../../data/voting.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    zIndex: "999"
  }
};

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option1_selected: "votingBox",
      option2_selected: "votingBox",
      option3_selected: "votingBox",
      option4_selected: "votingBox",
      option5_selected: "votingBox",

      vote_button: "disabledVoteButton",

      current_photo: "",
      modalIsOpen: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(instagram_photo) {
    this.setState({ modalIsOpen: true });
    this.setState({ current_photo: instagram_photo });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
            onClick={this.openModal.bind(this, data[0])}
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
            onClick={this.openModal.bind(this, data[0])}
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
            onClick={this.openModal.bind(this, data[0])}
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
            onClick={this.openModal.bind(this, data[0])}
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
            onClick={this.openModal.bind(this, data[0])}
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

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)} />
          <InstagramEmbed
            url={
              "https://www.instagram.com/p/" +
              this.state.current_photo.shortcode
            }
            maxWidth={600}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </Modal>
      </div>
    );
  }
}

export default Voting;
