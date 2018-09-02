import React, { Component } from "react";
// import "../stylesheets/executive.css";
import image from "../static/Exec_icon_David.png";

class Executive extends Component {
  render() {
    return (
      <div>
        <table>
          <body className="executive_container">
            <tr>
              <td>
                <img src={image} width="100" alt={this.props.name} />
              </td>
              <td>
                <div className="name">{this.props.name}</div>
                <div className="title">{this.props.title}</div>
              </td>
            </tr>
          </body>
        </table>
      </div>
    );
  }
}

export default Executive;
