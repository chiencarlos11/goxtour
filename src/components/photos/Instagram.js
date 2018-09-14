import React, { Component } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./instagramSlider.css";
import leftIcon from "../../static/arrowLeft.png";
import rightIcon from "../../static/arrowRight.png";
import "../../stylesheets/line-awesome/css/line-awesome.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxwidth: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

function matchID(element, imageID) {
  return element.id === imageID;
}

export default class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId,
      currentTag: this.props.tags,
      loaded: "false",
      modalIsOpen: false,
      current_photo: "",
      instagramData: this.props.instagramData,
      storeId: this.props.storeId
    };

    this.filteredInstagramData = this.props.instagramData;

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    //Modal
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //Instagram
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  openModal(instagram_link) {
    this.setState({ modalIsOpen: true });
    this.setState({ current_photo: instagram_link });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  nextSlide() {
    this.refs.slider.slickPrev();
  }

  previousSlide() {
    this.refs.slider.slickNext();
  }

  componentDidMount() {
    this.filterResultsByTag(this.state.currentTag);
    this.setState({ loaded: "true" });
  }

  filterResultsByStore(tags) {
    if (tags === undefined || tags === null) {
      this.filteredInstagramData = this.state.instagramData;
    } else if (tags == "__show_all__") {
      this.filteredInstagramData = this.state.instagramData;
    } else {
      var photoList = [];

      for (var i = 0; i < this.state.instagramData.length; i++) {
        var element = this.state.instagramData[i];
        let added = false;
        if (element.tags !== null && element.tags.indexOf(tags) >= 0) {
          photoList.push(element);
          console.log("Adding element = " + element.tags);
          added = true;
        }
        if (added === false) {
          if (
            element.edge_media_to_caption !== null &&
            JSON.stringify(element.edge_media_to_caption).includes(tags)
          ) {
            console.log(
              "Adding element = " +
                JSON.stringify(element.edge_media_to_caption)
            );
            photoList.push(element);
          }
        }
      }

      this.filteredInstagramData = photoList;
    }
  }

  filterResultsByTag(tags) {
    if (tags === undefined || tags.length === 0) {
      this.filteredInstagramData = this.state.instagramData;
    } else if (tags == "__show_all__") {
      this.filteredInstagramData = this.state.instagramData;
    } else {
      var photoList = [];
      for (var tag of tags) {
        for (var i = 0; i < this.state.instagramData.length; i++) {
          var element = this.state.instagramData[i];
          if (element.tags !== null && element.tags.indexOf(tag) >= 0) {
            photoList.push(element);
          }
        }
      }

      this.filteredInstagramData = photoList;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tags === undefined || nextProps.tags.length <= 0) {
      return true;
    } else if (nextProps.tags === ["__show_all__"]) {
      this.filterResultsByTag(nextProps.tags);
      return true;
    }

    if (this.state.instagramData && nextProps.tags !== this.state.currentTags) {
      this.filterResultsByTag(nextProps.tags);
      return true;
    }

    if (this.state.storeId !== nextProps.storeId) {
      this.setState({ storeId: nextProps.storeId });
      this.filterResultsByStore(nextProps.storeId);
      return true;
    }

    return false;
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };

    if (this.state.instagramData) {
      return (
        <div className="container-instagram-gallery">
          <div className="sliderButton">
            <img
              className="arrow_image"
              src={leftIcon}
              onClick={this.previousSlide}
            />
          </div>
          <div className="slider">
            <Slider ref="slider" {...settings}>
              {this.filteredInstagramData.map(photo => (
                <img
                  className="image"
                  key={photo.id}
                  src={photo.display_url}
                  alt={photo.id}
                  onClick={this.openModal.bind(this, photo)}
                />
              ))}
            </Slider>
          </div>
          <div className="sliderButton">
            <img
              className="arrow_image"
              src={rightIcon}
              onClick={this.nextSlide}
            />
          </div>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              className="frontfacing"
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
          </div>
        </div>
      );
    } else {
      return <div className="height_full">Loading</div>;
    }
  }
}
