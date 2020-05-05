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

export default function Login({navigation}) {
  const pressHandler = () => {
    navigation.navigate ('RegisterScreen');
  };
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
          <TextInput placeholder="E-mail" style={styles.inp1} />
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
        <View style={styles.buttons}>
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
