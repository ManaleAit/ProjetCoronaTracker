import * as React from 'react';
import { Text, View, Component } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './components/Dashboard';
import HomeIcon from './Icons/home.svg'
import Questionnaire from './components/QuestionnaireDB'
function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, }}>
            <Dashboard />
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
  
           <View style={{ flex: 1  ,backgroundColor:'#F6F6F6'}}><Questionnaire/></View>
           
           )
}
function MapScreen({ navigation }) {

    return (
        <View style={{ flex: 1, }}>
            <Text>maps</Text>
        </View >
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
            tabBarLabel: 'Home',
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
            tabBarLabel: 'Questions',
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
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon2 style={{ color: tintColor }} size={25} name={'map-marker'} />
                </View>
            )
        }
    },

}, { initialRouteName: 'HomeScreen', activeColor: '#272343', inactiveColor: 'gray', barStyle: { backgroundColor: 'white' } });

export default createAppContainer(tabnav);