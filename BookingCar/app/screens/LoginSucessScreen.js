import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
import BookingSelectCarScreen from './BookingSelectCarScreen'
import BaseScreen from './BaseScreen'
import LogoutButton from '../component/LogoutButton'
import BlueButton from '../component/BlueButton'
import GreenButton from '../component/GreenButton'
var Strings = require('../utils/Strings')

export default class LoginSucessScreen extends BaseScreen {
  
  constructor(props){
    super(props);
    
  }
  
  render(){
    return(
      <View style={styles.container}>
        {/* button back */} 
        <LogoutButton onPress={this.pressLogout.bind(this)} ></LogoutButton>
        
        {/* button booking ticket */} 
        <BlueButton onPress={this.pressBooking.bind(this)} title={Strings.BOOKING_CAR}></BlueButton>
  
        {/* button list car */}
        <GreenButton onPress={this.pressListCar.bind(this)} title={Strings.LIST_CAR} style={styles.button_list_car}></GreenButton>

      </View>
    )
  }
  
  pressLogout(){
    this.props.navigator.pop();
  }

  pressBooking(){
    this.props.navigator.push({ title: 'booking_select_car', index: Const.SCREEN.BOOKING_SELECT_CAR_SCREEN });
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