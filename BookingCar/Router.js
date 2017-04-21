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
  View,
  AsyncStorage,
} from 'react-native';

import MainScreen from './app/screens/MainScreen'
import LoginScreen from './app/screens/LoginScreen'
import LoginSucessScreen from './app/screens/LoginSucessScreen'
import ListCarScreen from './app/screens/ListCarScreen'
import BookingSelectCarScreen from './app/screens/BookingSelectCarScreen'
import ListCustomerScreen from './app/screens/ListCustomerScreen'
import LoginSuccessNavigator from './LoginSuccessNavigator'
import Progress from './app/component/Progress'

var Const = require('./app/utils/Const')
var Utils = require('./app/utils/Utils')
var routes = [
  { title: 'main', index: Const.SCREEN.MAIN_SCREEN },
  { title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN },
]
export default class Router extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: '',
      isShowProgress: true,
    }


  }

  componentDidMount() {
    Utils.getToken((value) => {
      this.setState({
        token: value,
        isShowProgress: false,
      });
    })
  }

  renderScene(route, navigator) {
    var view: View;
    Const.CURRENT_SCREEN = route.index;
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
      case Const.SCREEN.BOOKING_SELECT_CAR_SCREEN:
        view = <BookingSelectCarScreen
          navigator={navigator}>
        </BookingSelectCarScreen>
        break;
      case Const.SCREEN.LIST_CAR_SCREEN:
        view = <ListCarScreen
          navigator={navigator}>
        </ListCarScreen>
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
    if (this.state.isShowProgress == true) {
      return (
        <Progress />
      )
    } else {
      return (
        <Navigator
          initialRoute={(this.state.token == '' || this.state.token == null) ? routes[0] : routes[1]}
          renderScene={this.renderScene}
          configureScene={(route) => {
              return Navigator.SceneConfigs.FadeAndroid;
          }}
        />
      );
    }
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

