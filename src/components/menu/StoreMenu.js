import React, { Component } from "react";
import "./storeMenu.css";

import logo from "../../static/goXtour_logo.png";

class StoreMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId,
      execsData: this.props.execsData
    };
  }

  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
    this.setState({ currentExecId: id });
  }

  render() {
    return (
      <div className="container-menu">
        <div className="menu-top">
          <img className="image-top" src={logo} alt="" />
        </div>
        <div className="menu-main">
          <div className="provinceTitle">Ontario</div>
          <div className="storeLabel">
            #2000&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;
          </div>

          <div className="provinceTitle">Quebec</div>
          <div className="storeLabel">
            #2000&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;|&emsp;#2003&emsp;
          </div>

          <div className="provinceTitle">Manitoba</div>
          <div className="storeLabel">
            #2000&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;|&emsp;#2003&emsp;|&emsp;#2003&emsp;
          </div>

          <div className="provinceTitle">British Columbia</div>
          <div className="storeLabel">
            #2000&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003&emsp;|&emsp;#2001&emsp;|&emsp;#2002&emsp;|&emsp;#2003
          </div>

          <div className="provinceTitle">Alberta</div>
          <div className="storeLabel">#2000</div>
        </div>
      </div>
    );
  }
}

export default StoreMenu;
