import React, { Component } from "react";
import Slider from "react-slick";
import ImageModal from '../ImageModal'
import "../../stylesheets/instagramSlider.css";
import previousButtonImage from "../../images/white-plane-left.png";
import nextButtonImage from "../../images/white-plane-right.png";

export default class Instagram extends Component {
  constructor(props) {
    super(props);

    this.filteredInstagramData = null;

    this.state = {
      currentExecId: this.props.execId,
      currentStoreId: this.props.storeId,
      currentTag: this.props.tag,
      loaded: "false",
      showModal: false,
      photo: null
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleCloseModal() {
    console.log("Close Modal Clicked")
    this.setState({ showModal: false });
  }

  handleImageClick(photo){
    this.setState({ showModal: true });
    this.setState({ photo: photo });
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

  filterResultsByTag(tag) {
    if (tag === null || tag.length === 0) {
      this.filteredInstagramData = this.state.instagramData.data;
    } else {
      var photoList = [];
      for (var i = 0; i < this.state.instagramData.data.length; i++) {
        var element = this.state.instagramData.data[i];
        if (element.tags.indexOf(tag) >= 0) {
          photoList.push(element);
        }
      }
      this.filteredInstagramData = photoList;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tag === null || nextProps.tag.length <= 0) {
      return true;
    }

    if (this.state.instagramData && nextProps.tag !== this.state.currentTag) {
      this.filterResultsByTag(nextProps.tag);
      return true;
    }

    return false;
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      lazyLoad: true,
      arrows: false
    };

    if (this.state.loaded === "true") {
      return (
        <div>
          <ImageModal showModal={this.state.showModal} hideModal={this.handleCloseModal} photo={this.state.photo}/>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <button onClick={this.previousSlide}>Previous</button>
            </div>
            <div className="col-10">
              <Slider ref="slider" {...settings}>
                {this.filteredInstagramData.map(photo => 
                  (
                  <div className="imageContainer" key={photo.id} onClick={this.handleImageClick.bind(this,photo)}>
                    <img
                      className="image"
                      src={photo.images.standard_resolution.url}
                      alt={photo.id}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-1">
              <button onClick={this.nextSlide}>Next</button>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return <div> <ImageModal hideModal={this.handleCloseModal} showModal={this.state.showModal}/> <div className="height_full">Loading</div> </div>;
    }

  }
}
