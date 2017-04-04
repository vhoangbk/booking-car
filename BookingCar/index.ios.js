/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import MainScreen from './app/screens/MainScreen'
import LoginScreen from './app/screens/LoginScreen'

const MAIN_SCREEN = 1;
const LOGIN_SCREEN = 2;

export default class BookingCar extends Component {
  
  renderScene(route, navigator){
    var view : View;
    switch (route.index) {
      case MAIN_SCREEN:
        view = <MainScreen 
                pressLogin={()=>{navigator.push({ title: 'login', index: LOGIN_SCREEN });}}>
              </MainScreen>
        break;
      case LOGIN_SCREEN:
        view = <LoginScreen
                 pressBack={()=>{navigator.pop()}}>
              </LoginScreen>
        break;
    }
    return view;
  }
  
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'main', index: MAIN_SCREEN }}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('BookingCar', () => BookingCar);
