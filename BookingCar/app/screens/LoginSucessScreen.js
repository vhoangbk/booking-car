import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
var ApiClient = require('../network/APIClient')

import BookingSelectCarScreen from './BookingSelectCarScreen'
import BaseScreen from './BaseScreen'
import RoundButton from '../component/RoundButton'
import BlueButton from '../component/BlueButton'
import GreenButton from '../component/GreenButton'
var Strings = require('../utils/Strings')
import Progress from '../component/Progress'

export default class LoginSucessScreen extends BaseScreen {
  
  constructor(props){
    super(props);
    this.state = {
      isShowProgress:false,
      token:'',
    }

    Utils.getToken((value)=>{
      this.setState({
        token:value,
      })
    })
  }
  
  render(){
    return(
      <View style={styles.container}>
        {/* button back */} 
        <RoundButton title={Strings.LOGOUT} onPress={this.pressLogout.bind(this)} styleContainer={styles.button_logout} underlayColor='#607D8B70'></RoundButton>
        
        {/* button booking ticket */} 
        <BlueButton onPress={this.pressBooking.bind(this)} title={Strings.BOOKING_CAR}></BlueButton>
  
        {/* button list car */}
        <GreenButton onPress={this.pressListCar.bind(this)} title={Strings.LIST_CAR} style={styles.button_list_car}></GreenButton>

        {/*progress*/}
        { this.state.isShowProgress &&
          <Progress />
        }

      </View>
    )
  }

  /*
   * call api logout
   */
  pressLogout(){
    console.log('token: '+this.state.token);
    this.setState({ 
        isShowProgress : true, 
    });
  
    var params = {token:this.state.token};
    ApiClient.postRequest(
      Const.API.LOGOUT_URL,
      params,
      (success)=>{
        
        this.setState({ 
          isShowProgress : false, 
        });

        Utils.setToken('')
        
        this.props.navigator.resetTo({ title: 'main', index: Const.SCREEN.MAIN_SCREEN });
        
      },
      (error)=>{
        this.setState({ 
          isShowProgress : false, 
        });
      }
    )
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
  button_logout:{
    right:20,
    top:(Platform.OS === 'ios') ? 40 : 20,
    position:'absolute',
  }
})