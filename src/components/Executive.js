import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import '../stylesheets/executive.css'
import image from '../static/Exec_icon_David.png'

class Executive extends Component{

  render(){
    return(
        <div>
          <Media>
              <Media.Left>
                <img src={image} width="100" alt={this.props.name}/>
              </Media.Left>
              <Media.Body>
                <div className="name">{this.props.name}</div>
                <div className="title">{this.props.title}</div>
              </Media.Body>
          </Media>
        </div>

    )
  }
}

export default Executive;