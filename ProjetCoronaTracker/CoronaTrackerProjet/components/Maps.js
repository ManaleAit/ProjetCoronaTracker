import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE,Marker} from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');
import firebase  from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDpqE2eCFbKAMqm4Rn9lkQt1ijQhHbGmSM",
  authDomain: "reactprojet-e7e10.firebaseapp.com",
  databaseURL: "https://reactprojet-e7e10.firebaseio.com",
  projectId: "reactprojet-e7e10",
  storageBucket: "reactprojet-e7e10.appspot.com",
  messagingSenderId: "555247365105",
  appId: "1:555247365105:web:c713b2ef4ef6305f5af250",
  measurementId: "G-4VBMSP3EZX"
};
var   maldes=[];
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
  /*  firebase
    .database()
    .ref()
    .child("PositionMalades")
    .once("value", snapshot => {
      const data = snapshot.val()
      if (snapshot.val()) {
        const initmaldes= [];
        Object
          .keys(data)
          .forEach(per => initmaldes.push(data[per]));
       
          maldes= initmaldes
       
      }
    });
    firebase
    .database()
    .ref()
    .child("PositionMalades")
    .on("child_added", snapshot => {
      const data = snapshot.val();
      if (data) {
        
          maldes: [data.maldes]
      
      }
    })
    var maladess = [];
    for(var i=0;i<maldes.length;i++){
     
  
      maladess.push(
       <MapView.Marker
          coordinate={{"latitude":maldes[i].x,"longitude":maldes[i].y}}
          title={"malades"}
        />
		)
	}*/
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
