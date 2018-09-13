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

    console.log("hasVoted: " + this.props.hasVoted);

    if (this.props.hasVoted > 0) {
      this.state = {
        option1_selected: "disabledVotingBox",
        option2_selected: "disabledVotingBox",
        option3_selected: "disabledVotingBox",
        option4_selected: "disabledVotingBox",
        option5_selected: "disabledVotingBox",

        select_button: "invisibleSelectButton",
        vote_button: "disabledVoteButton",

        vote_sent: this.props.hasVoted,
        current_photo: "",
        modalIsOpen: false
      };

      if (this.props.hasVoted == 1) option1_selected: "votingBox";
      if (this.props.hasVoted == 2) option1_selected: "votingBox";
      if (this.props.hasVoted == 3) option1_selected: "votingBox";
      if (this.props.hasVoted == 4) option1_selected: "votingBox";
      if (this.props.hasVoted == 5) option1_selected: "votingBox";
    } else {
      this.state = {
        option1_selected: "votingBox",
        option2_selected: "votingBox",
        option3_selected: "votingBox",
        option4_selected: "votingBox",
        option5_selected: "votingBox",

        select_button: "selectButton",

        vote_button: "disabledVoteButton",
        vote_sent: this.props.hasVoted,

        current_photo: "",
        modalIsOpen: false
      };
    }

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(instagram_photo) {
    this.setState({ modalIsOpen: true });
    this.setState({ current_photo: instagram_photo });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSelectClicked(imageId) {
    this.setState({ selectedImage: imageId });

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

  handleVoteClicked() {
    if (typeof this.state.selectedImage !== "undefined") {
      this.setState({ vote_sent: true });
      this.setState({ select_button: "invisibleSelectButton" });
      this.props.castVote(this.state.selectedImage);
    }
  }

  renderAction() {
    let action;

    if (this.state.vote_sent) {
      action = <div className="finishedLabel">Thanks for your input</div>;
    } else {
      action = (
        <div
          className={this.state.vote_button}
          onClick={() => {
            this.handleVoteClicked();
          }}
        >
          VOTE
        </div>
      );
    }

    return action;
  }

  render() {
    return (
      <div className="container-voting">
        <div className={this.state.option1_selected}>
          <img
            className="votingImage"
            src={data[0].display_url}
            onClick={this.openModal.bind(this, data[0])}
          />
          <div
            className={this.state.select_button}
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
            src={data[1].display_url}
            onClick={this.openModal.bind(this, data[1])}
          />
          <div
            className={this.state.select_button}
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
            src={data[2].display_url}
            onClick={this.openModal.bind(this, data[2])}
          />
          <div
            className={this.state.select_button}
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
            src={data[3].display_url}
            onClick={this.openModal.bind(this, data[3])}
          />
          <div
            className={this.state.select_button}
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
            src={data[4].display_url}
            onClick={this.openModal.bind(this, data[4])}
          />
          <div
            className={this.state.select_button}
            onClick={() => {
              this.handleSelectClicked(5);
            }}
          >
            SELECT
          </div>
        </div>
        <div className="voteButtonLine">{this.renderAction()}</div>

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
