import React, { Component } from "react";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Gallery.css";
import { isMobile } from "react-device-detect";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxwidth: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    zIndex: "999",
    background: "unset",
    border: "unset",
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

    //modal
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
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
    if (!isMobile) {
      this.setState({ modalIsOpen: true });
      this.setState({ current_photo: instagram_photo });
    }
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

  previousImage(imageID) {
    let index = 0;
    let array = [];

    let curr = this.state.current_photo;

    if (this.state.currentTag) {
      array = this.filteredInstagramData;
    } else {
      array = this.state.instagramData;
    }

    index = array.findIndex(function(instagramImage) {
      return curr.id === instagramImage.id;
    });

    if (index === 0) {
      this.setState({ current_photo: array[array.length - 1] });
    } else {
      this.setState({ current_photo: array[index - 1] });
    }
  }

  nextImage(imageID) {
    let index = 0;
    let array = [];

    let curr = this.state.current_photo;

    if (this.state.currentTag) {
      array = this.filteredInstagramData;
    } else {
      array = this.state.instagramData;
    }

    index = array.findIndex(function(instagramImage) {
      return curr.id === instagramImage.id;
    });

    if (index === array.length - 1) {
      this.setState({ current_photo: array[0] });
    } else {
      this.setState({ current_photo: array[index + 1] });
    }
  }

  render() {
    document.body.style.height = "unset";
    if (this.state.loaded == "true") {
      return (
        <div className="imageList">
          <br />
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
                
                <div className="ModalBox">
                <div className="box2">
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
                </div>

                <div className="sliderButton box1">
                  <a
                    onClick={this.previousImage.bind(
                      this.state.current_photo.id
                    )}
                  >
                    <i className="la la-chevron-left la-4x" />
                  </a>
                </div>

                <div className="sliderButton box3">
                  <a onClick={this.nextImage.bind(this.state.current_photo.id)}>
                    <i className="la la-chevron-right la-4x" />
                  </a>
                </div>

                <div className="sliderButton box4">
                  <a onClick={this.closeModal}>
                    <i className="la la-close la-4x" />
                  </a>
                </div>
              </div>
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
