import React, { Component } from "react";
import "./execMenu.css";
import Modal from "react-modal";
import InstagramEmbed from "react-instagram-embed";
import logo from "../../static/goXtour_logo.png";
import execIcon_0 from "../../static/ExecPortraits/1_Ingram_profile.png";
import execIcon_1 from "../../static/ExecPortraits/2_Mullins_profile.png";
import execIcon_2 from "../../static/ExecPortraits/3_Fiederer_profile.png";
import execIcon_3 from "../../static/ExecPortraits/4_Appel_profile.png";
import execIcon_4 from "../../static/ExecPortraits/5_Yielding_profile.png";
import execIcon_5 from "../../static/ExecPortraits/6_Pennell_profile.png";
import execIcon_6 from "../../static/ExecPortraits/7_Poole_profile.png";
import execIcon_7 from "../../static/ExecPortraits/8_Cooper_profile.png";
import execIcon_8 from "../../static/ExecPortraits/9_McGuire_profile.png";
import execIcon_9 from "../../static/ExecPortraits/10_Nijjar_profile.png";
import execIcon_10 from "../../static/ExecPortraits/11_Amjad_profile.png";
import execIcon_11 from "../../static/ExecPortraits/12_Ross_profile.png";
import execIcon_12 from "../../static/ExecPortraits/13_Raj_profile.png";
import execIcon_13 from "../../static/ExecPortraits/14_Ellens_profile.png";
import "../../stylesheets/line-awesome/css/line-awesome.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translate(-50%, -50%)"
  }
};

class ExecMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId,
      currentStoreId: this.props.storeId,
      execsData: this.props.execsData,
      showStoreModal: false,
      modalIsOpen: false,
      current_photo: "",
      instagramData: this.props.instagramData
    };

    this.filteredInstagramData = this.props.instagramData;

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //Instagram
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  openModal(storeId) {
    this.filterResultsByTag(storeId);

    if (this.filteredInstagramData.length > 0) {
      this.setState({ current_photo: this.filteredInstagramData[0] });
      this.setState({ modalIsOpen: true });
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.props.changeTag(this.state.currentExecId);
    this.setState({ modalIsOpen: false });
  }

  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
    this.setState({ currentExecId: id });
  }

  handleStoreClick(id) {
    this.props.changeStoreTag(id);
    this.props.displayStore(id);
    // this.props.showStoreModal();
    this.setState({ showStoreModal: true });
    this.openModal(id);
  }

  previousImage(imageID) {
    let index = 0;
    let array = [];

    let curr = this.state.current_photo;

    array = this.filteredInstagramData;

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

    array = this.filteredInstagramData;

    index = array.findIndex(function(instagramImage) {
      return curr.id === instagramImage.id;
    });

    if (index === array.length - 1) {
      this.setState({ current_photo: array[0] });
    } else {
      this.setState({ current_photo: array[index + 1] });
    }
  }

  filterResultsByTag(tags) {
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
          added = true;
        }
        if (added === false) {
          if (
            element.edge_media_to_caption !== null &&
            JSON.stringify(element.edge_media_to_caption).includes(tags)
          ) {
            photoList.push(element);
          }
        }
      }

      this.filteredInstagramData = photoList;
      // if (this.filteredInstagramData && this.filteredInstagramData.length > 0){
      //   this.setState({first_photo_from_series: this.filteredInstagramData[0]})
      // }
    }
  }

  getPortrait(id) {
    switch (id) {
      case 0:
        return execIcon_0;
      case 1:
        return execIcon_1;
      case 2:
        return execIcon_2;
      case 3:
        return execIcon_3;
      case 4:
        return execIcon_4;
      case 5:
        return execIcon_5;
      case 6:
        return execIcon_6;
      case 7:
        return execIcon_7;
      case 8:
        return execIcon_8;
      case 9:
        return execIcon_9;
      case 10:
        return execIcon_10;
      case 11:
        return execIcon_11;
      case 12:
        return execIcon_12;
      case 13:
        return execIcon_13;
      default:
        return execIcon_0;
    }
  }

  getRender() {
    if (this.state.currentExecId >= 0) {
      return this.getStores();
    } else {
      return this.getExecs();
    }
  }

  getExecs() {
    let Execs = this.state.execsData.execs.map(exec => (
      <div
        className="menu-cell"
        key={exec.id}
        onClick={this.handleClick.bind(this, exec.id)}
      >
        <div className="execImageBox">
          <img className="execImage" src={this.getPortrait(exec.id)} alt="" />
        </div>
        <div className="execNameBox">
          <div className="execName">{exec.name}</div>
          <div className="execTitle">{exec.title}</div>
        </div>
      </div>
    ));

    return Execs;
  }

  getStores() {
    let exec = this.state.execsData.execs.find(
      x => x.id === this.state.currentExecId
    );

    let StoreList;
    if (exec.stores.length > 0) {
      StoreList = exec.stores[0].map(e => (
        <div
          key={e}
          className="execStoreLabel"
          onClick={this.handleStoreClick.bind(this, e)}
        >
          {e}
        </div>
      ));
    }

    return (
      <div>
        <div
          className="menu-cell"
          key={exec.id}
          onClick={this.handleClick.bind(this, exec.id)}
        >
          <div className="execImageBox">
            <img className="execImage" src={this.getPortrait(exec.id)} alt="" />
          </div>
          <div className="execNameBox">
            <div className="execName">{exec.name}</div>
            <div className="execTitle">{exec.title}</div>
          </div>
        </div>
        <br />
        <div className="provinceContainer">Visiting: {exec.province}</div>
        <br />
        <div className="storeListContainer">{StoreList}</div>

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
                  onClick={this.previousImage.bind(this.state.current_photo.id)}
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
  }

  render() {
    return (
      <div className="container-menu">
        <div className="menu-top">
          <img
            className="image-top"
            src={logo}
            alt=""
            onClick={this.handleClick.bind(this, "__show_all__")}
          />
        </div>
        <div className="menu-main">{this.getRender()}</div>
      </div>
    );
  }
}

export default ExecMenu;
