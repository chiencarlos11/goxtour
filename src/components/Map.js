import React, { Component } from 'react';
import CadMap from '../static/map.png'
// import '../stylesheets/background.css'

export default class Map extends Component{

  render(){

    return(
        <img className='map_background' src={CadMap} alt="" responsive />
    	)
  }
}