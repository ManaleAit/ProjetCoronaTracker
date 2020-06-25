import * as React from 'react';

import { Text, View, Component, ScrollView, StyleSheet,Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './components/Dashboard';

import Questionnaire from './components/QuestionnaireDB';

import Maps from './components/Maps';

 state =  {

          focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta:
              Dimensions.get("window").width /
              Dimensions.get("window").height *
              0.0122
          },
          locationChosen: false
}


function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, }}>
            <Dashboard navigation={navigation} />
        </View >
    )
}

function NotificationScreen({ navigation }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting</Text>
        </View >
    )
}

function ListScreen({ navigation }) {

    return (

        <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}><Questionnaire /></View>

    )
}
function MapScreen({ navigation }) {

   return (
           <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}><Maps /></View>


    )



}
const tabnav = createMaterialBottomTabNavigator({
    HomeScreen:
    {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={{ color: tintColor }} size={25} name={'dashboard'} />
                </View>
            )
        }
    },
    NotificationScreen:
    {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarLabel: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={{ color: tintColor }} size={25} name={'notifications'} />
                </View>
            )
        }
    },
    ListScreen:
    {
        screen: ListScreen,
        navigationOptions: {
            tabBarLabel: 'Test Corana',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={{ color: tintColor }} size={25} name={'format-list-bulleted'} />
                </View>
            )
        }
    },
    MapScreen:
    {
        screen: MapScreen,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon2 style={{ color: tintColor }} size={25} name={'map-marker'} />
                </View>
            )
        }
    },

}, { initialRouteName: 'HomeScreen', activeColor: '#272343', inactiveColor: 'gray', barStyle: { backgroundColor: 'white' } });
const Styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,

    }
});
export default createAppContainer(tabnav);