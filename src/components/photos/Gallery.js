import React, { Component } from "react";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Gallery.css";

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

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId,
      currentStoreId: this.props.storeId,
      currentTag: this.props.tag,
      loaded: "false",
      modalIsOpen: false,
      current_photo: "",
      instagramData: this.props.instagramData.slice(0, 19),
      displayIndex: 19,
      instagram: this.props.instagramData
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    //Modal
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  fetchMoreData = () => {
    let currIndex = this.state.displayIndex;

    let newIndex = currIndex + 10;
    if (newIndex >= this.state.instagram.length - 1) {
      newIndex = this.state.instagram.length - 1;
    }
    this.setState({ displayIndex: newIndex });

    this.setState({
      instagramData: this.state.instagram.slice(0, newIndex)
    });
  };

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

  nextSlide() {
    this.refs.slider.slickNext();
  }

  previousSlide() {
    this.refs.slider.slickPrev();
  }

  componentDidMount() {
    this.setState({ loaded: "true" });
  }

  render() {
    document.body.style.height = "unset";
    if (this.state.loaded == "true") {
      return (
        <div className="imageList">
          <div className="hover11">
            <InfiniteScroll
              dataLength={this.state.instagramData.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              style={"max-width: 1600px"}
            >
              {this.state.instagramData.map(photo => (
                <img
                  className="insta_image loading"
                  key={photo.id}
                  src={photo.display_url}
                  alt={photo.id}
                  onClick={this.openModal.bind(this, photo)}
                />
              ))}

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
            </InfiniteScroll>
          </div>
        </div>
      );
    } else {
      return <div className="height_full">Loading</div>;
    }
  }
}
