import React,{ Component } from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native'
import { mainApp } from './styles/getStarted';
import { NavigationContainer } from '@react-navigation/native';

export default class Splash extends React.Component {
    render() {
        return( <View style={mainApp.app}>
        <LottieView source={require('./splash.json')} autoPlay loop = {false} speed = {1}/>
        </View>
        )
      }
}   