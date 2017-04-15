
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  NetInfo,
} from 'react-native'

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
var ApiClient = require('../network/APIClient')

import BackButton from '../component/BackButton'
import BlueButton from '../component/BlueButton'
var Strings = require('../utils/Strings')

// import * as Progress from 'react-native-progress';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseScreen from './BaseScreen'
import md5 from "react-native-md5";

export default class LoginScreen extends BaseScreen {
  
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      isShowProgress:false,
      isInternetConnected:false,
    }
  }
  
  componentDidMount() {
    NetInfo.addEventListener(
        'change',
        this.handleConnectionInfoChange.bind(this)
    );
  }
  
  componentWillUnmount() {
    NetInfo.removeEventListener(
        'change',
        this.handleConnectionInfoChange.bind(this)
    );
  }
  
  handleConnectionInfoChange(isConnected){
    this.setState({
      isInternetConnected : isConnected,
    });
  };
  
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
          <View style={{backgroundColor : '#88888850', alignItems:'center', justifyContent:'center', width:Dimensions.get('window').width, height:Dimensions.get('window').height, position:'absolute', top:0, left:0}}>
            {/*<Progress.CircleSnail color={['blue']} />*/}
            <ActivityIndicator
              animating={true}
              style={[styles.centering, {height: 80}]}
              color='black'
              size="large"
            />
          </View>
          
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

    this.callApiLogin();
  }
  
  /*
   * call api login
   */
  callApiLogin(){
    dismissKeyboard();
    if (this.state.isInternetConnected == 'none' || this.state.isInternetConnected == false){
      Utils.showInfoMessage(Const.MESSAGE.INTERNET_NOT_CONNECT);
      return;
    }
    
    this.setState({ 
        isShowProgress : true, 
    });
    
    //4577bc35bc39c53a66d7b3d3ed10e8433a223603
    let md5pass = md5.hex_md5( this.state.password );
    var params = {username:this.state.username, password:md5pass};
    ApiClient.postRequest(
      Const.API.LOGIN_URL,
      params,
      (sucess)=>{
        console.log('[sucess] '+JSON.stringify(sucess))
        this.setState({ 
          isShowProgress : false, 
        });

        if(sucess.success == true){
          this.setState({
            password:'',
            username:'',
          })
          this.props.navigator.push({ title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN });
        }else{
          Utils.showInfoMessage(sucess.message);
        }   
        
      },
      (error)=>{
        console.log('[error] '+error)
        Utils.showInfoMessage(Const.MESSAGE.ERROR_NETWORK);
        
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
    borderColor: 'gray', 
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
    borderColor: 'gray', 
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
  button_title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
  },
})