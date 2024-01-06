import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

 const MyMapComponent = withGoogleMap((props) => (

<GoogleMap

defaultZoom={8}

defaultCenter={{ lat: -34.397, lng: 150.644 }}

>

{props.isMarkerShown && (

<Marker position={{ lat: -34.397, lng: 150.644 }} />

)}

</GoogleMap>

));

class MyMap extends React.Component {

state = {

isMarkerShown: false,

};

componentDidMount() {

this.delayedShowMarker();

}

delayedShowMarker = () => {

setTimeout(() => {

this.setState({ isMarkerShown: true });

}, 3000);

};

render() {

return (

<MyMapComponent

isMarkerShown={this.state.isMarkerShown}

loadingElement={<div style={{ height: '100%' }} />}

containerElement={<div style={{ height: '400px' }} />}

mapElement={<div style={{ height: '100%' }} />}

/>

);

}

}

export default MyMap;