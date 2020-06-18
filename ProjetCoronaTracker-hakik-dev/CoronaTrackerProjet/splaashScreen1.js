import React, {Component} from 'react';
import logo from './images/boxCont.png';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ActivityIndicator
} from 'react-native';
import firebase  from 'firebase';
import {TouchableOpacity} from 'react-native';

export default class splaashScreen1 extends Component {

  constructor(props) {
    super(props)

  }
  componentDidMount(){
    setTimeout(() => {
      
      this.props.navigation.navigate ('LoginScreen');
    }, 4000);
  }

  render(){
  return (
    <View style={styles.viewStyle}>

       <Image source={require ('./images/CoronaLogo.png')}  style={styles.img} />
        
       <Text  style={styles.text}>Let's act against <Text style={styles.text3}>Covid-19</Text>  </Text>
       <Text  style={styles.text2}>together</Text>
       <ActivityIndicator size={'small'} style={styles.load}/> 
       <Text  style={styles.text4}>Loading ...</Text>
    </View>
  );
}
}

const styles = StyleSheet.create ({
  viewStyle: {
    backgroundColor:'rgba(156,156,156, 0.9)',
    height:800,
  },
  img:{
    marginLeft:140,
    marginTop:240,
    width:80,
    height:80,
  },
  text:{
    color:'#272343',
    fontSize:20,
    marginLeft:80,
    marginTop:20,
    fontWeight:'bold',
  },
  text2:{
    color:'#272343',
    fontSize:20,
    marginLeft:150,
    fontWeight:'bold',
  },
  text3:{
    color:'green',
    fontWeight:'bold',
  },
  text4:{
    color:'#272343',
    fontSize:15,
    marginTop:20,
    marginLeft:150,
  },
  load:{

    marginTop:50,
  }
});
