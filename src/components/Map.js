import React, { Component } from 'react';
import CadMap from '../static/map.png'
import { Image } from 'react-bootstrap';
import '../stylesheets/background.css'

export default class Map extends Component{

  render(){

    return(
        <Image className='map_background background-white' src={CadMap} alt="" responsive />
    	)
  }
}