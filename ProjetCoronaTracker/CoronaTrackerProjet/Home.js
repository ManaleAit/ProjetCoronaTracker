import * as React from 'react';
import { Text, View, Component, ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './components/Dashboard';
import HomeIcon from './Icons/home.svg'
import Questionnaire from './components/QuestionnaireDB';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
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
        <View style={{ flex: 1, }}>
            <MapView style={Styles.map} provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                region={{

                    latitude: 32.323742,
                    longitude: -9.236578,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }} >
                <Marker coordinate={{
                    latitude: 32.323742,
                    longitude: -9.236578,
                }} title="Home" />
            </MapView>
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