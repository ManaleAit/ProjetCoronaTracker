import React, { Component } from 'react';

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

class Dashboard extends Component {
    render() {
        return (
            <View style={styles.containerView}>

                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.i1}>
                            Welcome Ayoub  !
                        </Text>
                        <Text
                            style={{ color: '#65799B', fontSize: 16, fontFamily: 'Poppings' }}
                        >
                            We hope you are safe
                        </Text>
                    </View>
                    <View style={styles.boxCases} >
                        <Text>test</Text>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({

    containerView: {
        flex: 1,
        padding: 20,

    },

    i1: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Poppings',
        color: '#272343',


    },
    switcher: {
        marginBottom: 45,
    },
    boxContainer: {
        flex: 1,

    },
    boxCases: {
        flex: 1,
        backgroundColor: 'red',
    },

});
export default Dashboard;
