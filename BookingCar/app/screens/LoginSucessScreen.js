import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
import BookingSelectCarScreen from './BookingSelectCarScreen'
import BaseScreen from './BaseScreen'
import LogoutButton from '../component/LogoutButton'

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
        <TouchableHighlight style={styles.button_booking} onPress={this.pressBooking.bind(this)} underlayColor={Const.COLOR.COLOR_0277BD_PRESS}>
          <Text style={styles.button_title}>Đặt vé</Text>
        </TouchableHighlight>
  
        {/* button list car */}
        <TouchableHighlight style={styles.button_list_car} onPress={this.pressListCar.bind(this)} underlayColor={Const.COLOR.COLOR_2E7D32_PRESS}>
          <Text style={styles.button_title}>Danh sách xe</Text>
        </TouchableHighlight>

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
  button_booking:{
    backgroundColor:Const.COLOR.COLOR_0277BD,
    paddingTop:15,
    paddingBottom:15,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width-60,
    borderRadius:5,
  },
  button_title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
  },
  button_list_car:{
    backgroundColor:Const.COLOR.COLOR_2E7D32,
    paddingTop:15,
    paddingBottom:15,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width-60,
    borderRadius:5,
  },
  
})