import React, { Component } from "react";
import image from "../../static/Exec_icon_David.png";

class Executive extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="menu_container">
              <div className="menuExecText">
                <div className="execbox1"><img src={image} className="menuLogo" alt={this.props.name} /></div>
                <div className="execbox2 menu_name">{this.props.name}</div>
                <div className="execbox3 menu_title">{this.props.title}</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Executive;
