import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image, TouchableOpacity,
    Button,
} from 'react-native';
import Chart from './Chart';

import Chart3 from './Chart3';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dataSource: null,
            totalInfected:null,
            totalDeaths:null,
            totalRecovered:null,
            new_daily_cases:null,
            new_daily_deaths:null,
        };
    }
    componentDidMount() {
        return fetch('https://api.thevirustracker.com/free-api?countryTotal=MA')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoaded: true,
                    dataSource: responseJson.countrydata,
                    totalInfected: responseJson.countrydata[0].total_cases,
                    totalDeaths: responseJson.countrydata[0].total_deaths,
                    totalRecovered: responseJson.countrydata[0].total_recovered,
                    new_daily_cases: responseJson.countrydata[0].total_new_cases_today,
                    new_daily_deaths: responseJson.countrydata[0].total_new_deaths_today,

                })
            })
            .catch((error) => console.log(error));
    }


    returnTotalInfected() {
        return this.state.isLoaded ? this.state.totalInfected : "---";
    }
    returnTotalDeaths() {
        return this.state.isLoaded ? this.state.totalDeaths : "---";
    }
    returnTotalRecovered() {
        return this.state.isLoaded ? this.state.totalRecovered : "---";
    }
    returnDailyCases() {
        return this.state.isLoaded ? this.state.new_daily_cases : "---";
    }
    returnDailyDeaths() {
        return ""+this.state.isLoaded ? this.state.new_daily_deaths : "---";
    }
    
    render() {

        return (
            <View style={styles.containerView}>

                <ScrollView>
                    <View style={styles.boxContainer1}>
                        <View style={styles.inlineLogout}>
                            <Text style={styles.i1}>
                                Welcome Ayoub ! 
                                
                                
                                
                            </Text>

                            <Icon style={{ color:'#272343',marginLeft:90,margin:10,justifyContent:'flex-start'}} size={25} name={'logout'} onPress={() => {
                                this.props.navigation.navigate('LoginScreen', null);
                            }} />

                            
                        </View>
                        <Text
                            style={{ color: '#65799B', fontSize: 16, fontFamily: 'Poppings' }}
                        >
                            We hope you are safe
                            
                        </Text>
                    </View>
                    <View style={styles.boxContainer2} >
                        <Text style={{ fontFamily: 'Poppings', fontSize: 14, color:'#272343'}}>Today's Moroccan update</Text>
                        <View style={styles.inlineCases}>
                            <View style={styles.infected}><Text style={{ color: '#F8C650', fontSize: 15, fontFamily: 'Poppings' }}>New Cases</Text><Text style={styles.dataCases}>{this.returnDailyCases()}</Text><Image source={require('../Icons/courbJaune.png')} /></View>
                            <View style={styles.deaths}><Text style={{ color: '#F85050', fontSize: 15, fontFamily: 'Poppings' }}>New Deaths</Text><Text style={styles.dataCases}>{this.returnDailyDeaths()}</Text><Image style={{ width: 80 }} source={require('../Icons/Path117.png')} /></View>
                        </View>
                        <View style={styles.inlineCases}>
                            <View style={styles.infected}><Text style={{ color: '#F8C650', fontSize: 15, fontFamily: 'Poppings' }}>Infected</Text><Text style={styles.dataCases}>{this.returnTotalInfected()}</Text><Image source={require('../Icons/courbJaune.png')} /></View>
                            <View style={styles.recovered}><Text style={{ color: '#50F872', fontSize: 15, fontFamily: 'Poppings' }}>Recovered</Text><Text style={styles.dataCases}>{this.returnTotalRecovered()}</Text><Image style={{width:80}} source={require('../Icons/Path115.png')} /></View>
                            <View style={styles.deaths}><Text style={{ color: '#F85050', fontSize: 15, fontFamily: 'Poppings' }}>Deaths</Text><Text style={styles.dataCases}>{this.returnTotalDeaths()}</Text><Image style={{ height: 50 }} source={require('../Icons/Path117.png')} /></View>
                        </View>
                    </View>
                    <Text style={{ marginTop: 30, fontFamily: 'Poppings', fontSize: 14, color: '#272343' }}>Moroccan last recovered cases statistics</Text>

                    <View style={styles.boxContainer3}>
                        <View  style={{backgroundColor:'#272343',width:315,height:240,borderRadius:15,marginLeft:3,marginTop:10}}>
                    

                        <Text  style={{ color:'white',marginLeft:20,borderBottomWidth:1,borderColor:'white',width:270,marginBottom:10,opacity:0.6,paddingBottom:5}}> <Image  source={require('../images/header.png')}  />Morocco</Text>
                        <Text  style={{ color:'white',marginLeft:240,marginTop:-35,marginBottom:10,opacity:0.6,paddingBottom:5}}>Change</Text>
                        
                        <Chart />

                        
                        </View>
     
                    </View>

                    
                    <Text style={{ marginTop: 30, fontFamily: 'Poppings', fontSize: 14, color: '#272343' }}>Moroccan last death cases statistics</Text>

                    <View style={styles.boxContainer3}>
                        <View style={{ backgroundColor: '#272343', width: 315, height: 240, borderRadius: 15, marginLeft: 3, marginTop: 10 }}>


                            <Text style={{ color: 'white', marginLeft: 20, borderBottomWidth: 1, borderColor: 'white', width: 270, marginBottom: 10, opacity: 0.6, paddingBottom: 5 }}> <Image source={require('../images/header.png')} />Morocco</Text>
                            <Text style={{ color: 'white', marginLeft: 240, marginTop: -35, marginBottom: 10, opacity: 0.6, paddingBottom: 5 }}>Change</Text>

                            <Chart3 />


                        </View>

                    </View>
                    

                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    inlineLogout:{
        flexDirection: 'row',

    },
    i1:{
        justifyContent: 'flex-start',
        flex: 1,

    },
    
    boxContainer3:{
        alignItems:'center'
    },
    dataCases: {
        color: 'white'
    },
    inlineCases: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    },
    infected: {
        flex: 1,
        margin: 10,
        paddingTop: 4,
        width: 100,
        height: 100,
        backgroundColor: '#272343',
        alignItems: 'center',
        color: 'white',
        borderRadius: 10,
        marginLeft:0,
    },
    recovered: {
        flex: 1,
        margin: 10,
        paddingTop: 4,
        width: 100,
        height: 100,
        backgroundColor: '#272343',
        alignItems: 'center',
        color: 'white',
        borderRadius: 10,

    },
    deaths: {
        flex: 1,
        margin: 10,
        paddingTop: 4,
        width: 100,
        height: 100,
        backgroundColor: '#272343',
        alignItems: 'center',
        color: 'white',
        borderRadius: 10,
        marginRight:0,
    },
    boxContainer2: {
        flex: 1,
        
    },
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
    boxContainer1: {
        flex: 1,
        paddingBottom: 30,

    },



});




export default Dashboard;
