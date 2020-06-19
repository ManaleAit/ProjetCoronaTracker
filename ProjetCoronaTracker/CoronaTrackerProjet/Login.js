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
import firebase  from 'firebase';
import {TouchableOpacity} from 'react-native';
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
//firebase.initializeApp(firebaseConfig);
var   person=[];
var people =
  {firstname: '',password:''}
export default function Login({navigation}) {


  const pressHandler = () => {
    navigation.navigate ('RegisterScreen');
  };
  const Login=()=>{
  
    firebase
      .database()
      .ref()
      .child("person")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const initperson = [];
          Object
            .keys(data)
            .forEach(per => initperson.push(data[per]));
         
            person= initperson
         
        }
      });

    firebase
      .database()
      .ref()
      .child("person")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          
            person: [data.person]
        
        }
      })
      var count=0;
      for(var i=0;i<person.length;i++){
        
         if(person[i].firstname=== people.firstname && person[i].password===people.password){
          localStorage.setItem('firstname',person[i].firstname);
          localStorage.setItem('pass',person[i].password);
          navigation.navigate ('HomeScreen', { people: people});
           count++;
         }
        }
     if(count==0){
        alert('Check your password !!');
    }
 

   
  }
  return (
    <View style={styles.containerView}>

      <ScrollView>
        <View style={styles.boxContainer}>
          <View style={styles.switcher}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={require ('./images/boxCont.png')} />
              <Image
                style={styles.img}
                source={require ('./images/boxContent.png')}
              />
            </TouchableOpacity>
          </View>
          <Image source={require ('./images/CoronaLogo.png')} />
          <Text style={styles.i1}>
            Login
          </Text>
          <Text
            style={{color: '#65799B', fontSize: 16, fontFamily: 'Poppings'}}
          >
            To start tracking
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder="Firstname" style={styles.inp1}   name="firstname"  
          
          onChangeText={(text) => {
           
          people.firstname=text
              
          }}/>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              marginBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#272343',
            }}
            name="password"  
          
            onChangeText={(text) => {
           
            people.password=text
              
          }}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={() => {
               
              Login();
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Poppings',
                color: '#272343',
                textAlign: 'center',
              }}
            >
              {' '}
              Login{' '}
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 10,
                fontSize: 13,
                color: '#65799B',
                fontFamily: 'Poppings',
              }}
            >
              Forgot password ?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.RegisterButtonStyle}
            activeOpacity={0.5}
            onPress={pressHandler}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Poppings',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
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
    paddingTop: 40,
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
