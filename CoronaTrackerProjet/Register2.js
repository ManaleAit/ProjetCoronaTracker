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

export default class Register2 extends Component {
  render () {
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
            />
            <TouchableOpacity
              style={styles.RegisterButtonStyle}
              activeOpacity={0.5}
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
