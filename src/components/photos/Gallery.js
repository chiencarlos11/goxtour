import React, { Component } from "react";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import "./Gallery.css";

import LazyLoad from 'react-lazyload';

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
    zIndex: "900"
  }
};

export default class Gallery extends Component {

  constructor(props) {
    super(props);

    this.filteredInstagramData = null;

    this.state = {
      currentExecId: this.props.execId,
      currentStoreId: this.props.storeId,
      currentTag: this.props.tag,
      loaded: "false",
      modalIsOpen: false,
      current_photo_link: null
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    //Modal
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(instagram_link) {
    this.setState({ modalIsOpen: true });
    this.setState({ current_photo_link: instagram_link });
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
    this.refreshData();
  }

  refreshData() {
    var url =
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=927635119.e6873b5.fcd374c1687e423e8dd81bb2a78c4744";

    if (this.props.access_token){
      url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + this.props.access_token;
    }

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        return responseData;
      })
      .then(data => {
        this.setState({ instagramData: data });
        this.filterResultsByTag(this.state.currentTag);
        this.setState({ loaded: "true" });
      })
      .catch(err => {
        console.log("fetch error" + err);
      });
  }

  filterResultsByTag(tags) {
    if (tags === undefined || tags.length === 0) {
      
      this.filteredInstagramData = this.state.instagramData.data;
    } else if (tags == '__show_all__'){
      this.filteredInstagramData = this.state.instagramData.data;
    } else {
      var photoList = [];
      for (var tag of tags) {
        for (var i = 0; i < this.state.instagramData.data.length; i++) {
          var element = this.state.instagramData.data[i];
          if (element.tags.indexOf(tag) >= 0) {
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
    } else if (nextProps.tags === ['__show_all__']) {
      this.filterResultsByTag(nextProps.tags);
      return true;
    }

    if (this.state.instagramData && nextProps.tags !== this.state.currentTags) {
      this.filterResultsByTag(nextProps.tags);
      return true;
    }

    return false;
  }


  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 3,
      slidesPerRow: 1,
      lazyLoad: true,
    };
    document.body.style.height = "unset";
    if (this.state.loaded == "true") {
      return (
        <div className="imageList">
            <div className="list hover11">
              <LazyLoad height={200} offset={100}>
              {this.filteredInstagramData.map(photo => (
                <img
                  className="insta_image loading"
                  key={photo.id}
                  src={photo.images.standard_resolution.url}
                  alt={photo.id}
                  onClick={this.openModal.bind(this, photo.link)}
                />
              ))}

          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)} />
              <InstagramEmbed
                url={this.state.current_photo_link}
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
          </LazyLoad>
         </div>
        </div>
      )
    } else {
      return <div className="height_full">Loading</div>;
    }
  }
}
