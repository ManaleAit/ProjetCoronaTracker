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
import logo from './images/boxCont.png';
import {TouchableOpacity} from 'react-native';
import RegisterHeaderComponent from './components/registerHeaderComponent';
import firebase  from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyArE7GAD_j1wapYlggDe2FnhgJhEAunGoQ",
  authDomain: "prjcorona-8ce7a.firebaseapp.com",
  databaseURL: "https://prjcorona-8ce7a.firebaseio.com",
  projectId: "prjcorona-8ce7a",
  storageBucket: "prjcorona-8ce7a.appspot.com",
  messagingSenderId: "403228746339",
  appId: "1:403228746339:web:80fede36cc117b7aaa4e56",
  measurementId: "G-RBRX88VNT0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default class Register2 extends Component {




  constructor(props) {
    super(props)

    this.state = {
   
      people: this.props.navigation.state.params.people,
      password:'',
      confirmpassword:''
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem () {
   

    const newPer = firebase.database().ref()
                          .child("person")
                          .push();
    newPer .set({firstname:this.state.people.firstname,lastname:this.state.people.lastname,age:this.state.people.age,adresse:this.state.people.Address,password:this.state.password,malade:'false'}, () => this.setState({password:'',confirmpassword:''}))

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
