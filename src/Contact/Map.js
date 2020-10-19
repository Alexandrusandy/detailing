import React,{Component} from "react";
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const style = {
  width: '100%',
  height: '100%'
}
class Mapps extends Component{
	render(){
		return(
			<div className="">
   <Map google={this.props.google} zoom={10}>
             

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
      </div>
			)
	}
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyAXEe_q0yrZaBkjSaXYtpvYtJ_jWaE6iTY')
})(Mapps)