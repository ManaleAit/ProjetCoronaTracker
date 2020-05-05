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

import {TouchableOpacity} from 'react-native';

export default class registerHeaderComponent extends Component {
  render () {
    return (
      <View>
        <View style={styles.switcher}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              style={styles.img}
              source={require ('../images/boxContent.png')}
            />
          </TouchableOpacity>
        </View>
        <Image source={require ('../images/CoronaLogo.png')} />
        <Text style={styles.i1}>
          Create account
        </Text>
        <Text style={{color: '#65799B', fontSize: 16, fontFamily: 'Poppings'}}>
          To start tracking
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  inp1: {
    marginBottom: 14,
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
    marginBottom: 5,
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

  NextButtonStyle: {
    marginTop: 40,
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
