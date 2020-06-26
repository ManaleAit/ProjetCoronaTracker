import React, {Component} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
navigator.geolocation = require('@react-native-community/geolocation');
import logo from './images/boxCont.png';
import {TouchableOpacity} from 'react-native';
import RegisterHeaderComponent from './components/registerHeaderComponent';
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


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default class Register2 extends Component {




  constructor(props) {
    super(props)

    this.state = {
      latitude: 31.7945,
      longitude: -7.0849,
      people: this.props.navigation.state.params.people,
      password:'',
      confirmpassword:''
    };

    this.addItem = this.addItem.bind(this);
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


  addItem () {
  
 
  

    firebase.database().ref("person/"+this.state.people.firstname+''+this.state.password)
                          .set({firstname:this.state.people.firstname,lastname:this.state.people.lastname,age:this.state.people.age,adresse:this.state.people.Address,password:this.state.password,malade:'false',x:this.state.latitude,y:this.state.longitude}, () => this.setState({password:'',confirmpassword:''}))
    
    this.props.navigation.navigate ('LoginScreen');
  
  }
  
  render () {
 //   alert(   +'  '+ this.state.people.age)
    return (
      <View style={styles.containerView}>

        <ScrollView>
          <RegisterHeaderComponent />
          <View style={styles.inputs}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#272343',
              }}
              onChangeText={(text) => {
             
               this.state.password=text
                    
                }}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              placeholder="Confirm password"
              secureTextEntry={true}
              style={{
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#272343',
              }}
              onChangeText={(text) => {
             
                this.state.confirmpassword=text
                     
                 }}
              />
            <TouchableOpacity
              style={styles.RegisterButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
               
                this.addItem()
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Poppings',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Poppings',
                  color: '#272343',
                  textAlign: 'center',
                }}
              >
                Previous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.LoginBtn}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate ('LoginScreen');
            
              }}
            >
              <Text
                style={{
                  marginTop: 15,
                  fontWeight: 'bold',
                  fontFamily: 'Poppings',
                  color: 'gray',
                  textAlign: 'center',
                }}
              >
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  inp1: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#272343',
  },
  i1: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Poppings',
    color: '#272343',
  },
  containerView: {
    flex: 1,
    padding: 40,
  },

  boxContainer: {
    flex: 2,
  },
  inputs: {
    paddingTop: 20,
    flex: 1,
  },
  buttons: {
    flex: 2,
  },
  switcher: {
    alignItems: 'flex-end',
    marginBottom: 45,
  },
  SubmitButtonStyle: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,

    backgroundColor: '#AFAFB7',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#272343',
  },

  RegisterButtonStyle: {
    marginTop: 55,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#272343',
  },
  img: {
    marginTop: -20,
  },
});
