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
import LoginSucessScreen from './app/screens/LoginSucessScreen'
import ListCarScreen from './app/screens/ListCarScreen'

var Const = require('./app/utils/Const')

export default class BookingCar extends Component {
  
  renderScene(route, navigator){
    var view : View;
    switch (route.index) {
      case Const.SCREEN.MAIN_SCREEN:
        view = <MainScreen 
                navigator={navigator}>
              </MainScreen>
        break;
      case Const.SCREEN.LOGIN_SCREEN:
        view = <LoginScreen
                 navigator={navigator}>
              </LoginScreen>
        break;
      case Const.SCREEN.LOGIN_SUCESS_SCREEN:
        view = <LoginSucessScreen
                 navigator={navigator}>
              </LoginSucessScreen>
        break;
      case Const.SCREEN.LIST_CAR_SCREEN:
        view = <ListCarScreen
                 navigator={navigator}>
              </ListCarScreen>
        break;
    }
    return view;
  }
  
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'main', index: Const.SCREEN.MAIN_SCREEN }}
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
