
import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Platform,
} from 'react-native'

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
var ApiClient = require('../network/APIClient')

import BackButton from '../component/BackButton'
import BlueButton from '../component/BlueButton'
var Strings = require('../utils/Strings')

// import * as Progress from 'react-native-progress';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import BaseScreen from './BaseScreen'
import Progress from '../component/Progress'
import md5 from "react-native-md5";

export default class LoginScreen extends BaseScreen {
  
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      isShowProgress:false,
    }
    
  }

  render(){

    return(
      <View style={styles.container}>
        {/* button back */}
        <BackButton onPress={this.pressBack.bind(this)} ></BackButton>
        
        {/*username input*/}
        <TextInput style={styles.input_username} placeholder='Tên đăng nhập'
            returnKeyType='next'
            autoCapitalize='none'
            value={this.state.username}
            onSubmitEditing={()=>{this.passwordInput.focus()}}
            onChangeText={(user)=>{this.setState({username : user.trim()})}}
            autoCorrect={false}>
        </TextInput>
        
        {/*password input*/}
        <TextInput style={styles.input_password} placeholder='Mật khẩu' secureTextEntry
          returnKeyType='done'
          autoCorrect={false}
          ref={(input)=>{this.passwordInput = input}}
          autoCapitalize='none'
          value={this.state.password}
          onChangeText={(pass)=>{this.setState({password : pass.trim()})}}>
        </TextInput>
        
        {/*button login*/}
        <BlueButton style={styles.button_login} onPress={this.pressLogin.bind(this)} title={Strings.LOGIN}></BlueButton>
   
        {/*progress*/}
        { this.state.isShowProgress &&
          <Progress />
        }

      </View>
      
    )
  }
  
  pressBack(){
    dismissKeyboard();
    this.props.navigator.pop();
  }

  pressLogin(){
    if('' == this.state.username){
      Utils.showInfoMessage(Const.MESSAGE.USERNAME_EMPTY);
      return;
    }
    if('' == this.state.password){
      Utils.showInfoMessage(Const.MESSAGE.PASSWORD_EMPTY);
      return;
    }
    // if (this.state.isInternetConnected == false){
    //   Utils.showInfoMessage(Const.MESSAGE.INTERNET_NOT_CONNECT);
    //   return;
    // }

    this.callApiLogin();
  }
  
  /*
   * call api login
   */
  callApiLogin(){
    dismissKeyboard();
    
    this.setState({ 
        isShowProgress : true, 
    });
    
    let md5pass = md5.hex_md5( this.state.password );
    var params = {username:this.state.username, password:md5pass};
    ApiClient.postRequest(
      Const.API.LOGIN_URL,
      params,
      (success)=>{
        
        this.setState({ 
          isShowProgress : false, 
        });

        this.setState({
          password:'',
          username:'',
        })
        
        // save token
        Utils.setToken(success.data.token);
        
        this.props.navigator.push({ title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN });
        
        setTimeout(()=>{
          this.props.navigator.immediatelyResetRouteStack([{ title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN }]);
        }, 500);

      },
      (error)=>{
        this.setState({ 
          isShowProgress : false, 
        });
      }
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  input_username:{
    borderColor: (Platform.OS === 'ios') ? 'gray' : 'transparent', 
    borderWidth: 1,
    height:50,
    marginLeft:30,
    marginRight:30,
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5,
    fontSize:20,
    width:Dimensions.get('window').width - 60,
  },
  input_password:{
    borderColor: (Platform.OS === 'ios') ? 'gray' : 'transparent', 
    borderWidth: 1,
    height:50,
    marginLeft:30,
    marginRight:30,
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5,
    fontSize:20,
    marginTop:20,
    width:Dimensions.get('window').width - 60,
  },
  button_login:{
    marginTop:20,
  },

})