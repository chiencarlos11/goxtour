import React, { Component } from 'react';
import CadMap from '../static/map.png'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import '../stylesheets/background.css'

export default class Map extends Component{

  render(){

    return(
    	<Grid >
    		<Row>
    			<Col >
    				<Image className='background-white' src={CadMap} alt="" responsive />
    			</Col>
    		</Row>
    	</Grid>
    	)
  }
}