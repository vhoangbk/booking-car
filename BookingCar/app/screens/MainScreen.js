import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

import BaseScreen from './BaseScreen'
import BlueButton from '../component/BlueButton'

var Const = require('../utils/Const')
var Strings = require('../utils/Strings')

export default class MainScreen extends BaseScreen {
  
  render(){
    return(
      <View style={styles.container}>
        {/* button login */} 
        <BlueButton onPress={this.pressLogin.bind(this)} title={Strings.LOGIN}></BlueButton>
  
        {/* button list car */}
        <TouchableHighlight style={styles.button_list_car} onPress={this.pressListCar.bind(this)} underlayColor={Const.COLOR.COLOR_2E7D32_PRESS}>
          <Text style={styles.button_title}>Danh sách xe</Text>
        </TouchableHighlight>
        
        
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