import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import BaseScreen from './BaseScreen'
import BlueButton from '../component/BlueButton'
import GreenButton from '../component/GreenButton'

var Const = require('../utils/Const')
var Strings = require('../utils/Strings')

export default class MainScreen extends BaseScreen {
  
  render(){
    return(
      <View style={styles.container}>
        {/* button login */} 
        <BlueButton onPress={this.pressLogin.bind(this)} title={Strings.LOGIN}></BlueButton>
  
        {/* button list car */}
        <GreenButton onPress={this.pressListCar.bind(this)} title={Strings.LIST_CAR} style={styles.button_list_car}></GreenButton>
        
      </View>
    )
  }
  
  pressLogin(){
    this.props.navigator.push({ title: 'login', index: Const.SCREEN.LOGIN_SCREEN });
  }
  
  pressListCar(){
    this.props.navigator.push({ title: 'list_car', index: Const.SCREEN.LIST_CAR_SCREEN });
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  button_list_car:{
    marginTop:20,
  },
  
})