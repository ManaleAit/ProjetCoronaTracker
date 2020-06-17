import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE,Marker} from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

class Maps  extends Component {
 constructor(props) {
    super(props);

    this.state = {
      latitude: 31.7945,
      longitude: -7.0849,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }


  render() {
   return (
        <MapView style={styles.map} initialRegion={{
         latitude:31.7945,
         longitude:-7.0849,
         latitudeDelta: 4,
         longitudeDelta: 4
        }}>

        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
           coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
           title={"Your Location"}
         />}

        </MapView>
      );
    };
    }
  const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
export default Maps;
