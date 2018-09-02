import React, { Component } from "react";
import image from "../../static/plane.png";

class Store extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
          <td>
            <img src={image} className="menuLogo" alt={this.props.name} />
          </td>
          <td>
            <div className="menu_name">{this.props.name}</div>
            <div className="menu_title">{this.props.state}</div>
          </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Store;
