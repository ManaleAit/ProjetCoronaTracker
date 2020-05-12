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


    render() {

        return (
            <View>

                <LineChart
                    data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                data: [
                                    1,
                                    4,
                                    2,
                                    3,
                                    8,
                                    4,
                                    10,
                                ]
                            }
                        ]
                    }}
                    width={300} // from react-native
                    height={160}
                    yAxisLabel=""
                    yAxisSuffix=""

                    yAxisInterval={100} // optional, defaults to 1

                    chartConfig={{

                        backgroundColor: "#272343",
                        backgroundGradientFrom: "#272343",
                        backgroundGradientTo: "#272343",
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
                        //marginLeft:20,
                        // marginTop:300,

                        borderRadius: 16
                    }}
                />
            </View>
        );
    }
}

