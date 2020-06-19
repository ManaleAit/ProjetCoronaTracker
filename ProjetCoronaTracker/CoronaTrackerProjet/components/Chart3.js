/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dataSource: null,
        };
    }
    componentDidMount() {
        return fetch('https://api.thevirustracker.com/free-api?countryTimeline=MA')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoaded: true,
                    dataSource: responseJson.timelineitems[0],
                }); console.log(this.state.dataSource[Object.keys(this.state.dataSource)[Object.keys(this.state.dataSource).length - 2 - 0]]);
            })
            .catch((error) => console.log(error));
    }


    getSevenLastDays() {
        let WeekDays = [];
        for (var i = 0; i < 7; i++) {
            WeekDays.push(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            [new Date(Object.keys(this.state.dataSource)[Object.keys(this.state.dataSource).length - 3 - i])
                .getDay()]);
        }
        return WeekDays
    }
    getSevenLastCases() {
        let TabCases = [];
        for (var i = 0; i < 7; i++) {
            TabCases.push((this.state.dataSource[Object.keys(this.state.dataSource)[Object.keys(this.state.dataSource).length - 2 - i]].new_daily_deaths));

        }
        return TabCases;
    }

    returnTotalInfected = () => {
        return {
            labels: this.state.isLoaded ? this.getSevenLastDays() : [],
            datasets: [
                {
                    data: this.state.isLoaded ? this.getSevenLastCases() : [0, 0, 0, 0, 0, 0, 0]

                }
            ]

        }
    }

    render() {

        return (
            <View>

                <LineChart
                    data={this.returnTotalInfected()}
                    width={300} // from react-native
                    height={180}
                    yAxisLabel=""
                    yAxisSuffix=""

                    yAxisInterval={100} // optional, defaults to 1

                    chartConfig={{

                        backgroundColor: "green",
                        backgroundGradientFrom: "red",
                        backgroundGradientTo: "red",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,

                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            // stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{

                        //marginVertical: 8,
                        marginLeft: 8,
                        // marginTop:300,

                        borderRadius: 16
                    }}
                />


            </View>
        );
    }
}

