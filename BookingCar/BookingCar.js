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
import BookingSelectCarScreen from './app/screens/BookingSelectCarScreen'
import ListCustomerScreen from './app/screens/ListCustomerScreen'

var Const = require('./app/utils/Const')
var Utils = require('./app/utils/Utils')

export default class BookingCar extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      token:'',
    }
    Utils.getToken((error, result)=>{
      this.setState({
        token:result,
      })
    });
  }
  
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
      case Const.SCREEN.BOOKING_SELECT_CAR_SCREEN:
        view = <BookingSelectCarScreen
                 navigator={navigator}>
              </BookingSelectCarScreen>
        break;
      case Const.SCREEN.LIST_CUSTOMER_SCREEN:
        view = <ListCustomerScreen
                 navigator={navigator}>
              </ListCustomerScreen>
        break;
    }
    return view;
  }
  
  render() {
    const routes = [
      { title: 'main', index: Const.SCREEN.MAIN_SCREEN },
      { title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN },
    ];
    return (
      <Navigator
        initialRoute={this.state.token === '' ? routes[0] : routes[1]}
        renderScene={this.renderScene}
      />
    );
  }
  
  initialRoute(){
    return { title: 'main', index: Const.SCREEN.MAIN_SCREEN }
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

